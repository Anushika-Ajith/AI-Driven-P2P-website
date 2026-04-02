"""
Regex-first entity extraction; optional LLM fallback when no IDs match.
"""
import json
import os
import re
from typing import Any, Dict, Optional

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

REQ_RE = re.compile(r"\b(REQ\d+)\b", re.IGNORECASE)
PO_RE = re.compile(r"\b(PO\d+)\b", re.IGNORECASE)
INV_RE = re.compile(r"\b(INV\d+)\b", re.IGNORECASE)


def extract_entities_regex(message: str) -> Dict[str, str]:
    """Extract requisition_no, po_no, invoice_no from text."""
    out: Dict[str, str] = {}
    if not message:
        return out
    m = REQ_RE.search(message)
    if m:
        out["requisition_no"] = m.group(1).upper()
    m = PO_RE.search(message)
    if m:
        out["po_no"] = m.group(1).upper()
    m = INV_RE.search(message)
    if m:
        out["invoice_no"] = m.group(1).upper()
    return out


def _llm_extract_ids(message: str) -> Dict[str, str]:
    """Fallback: ask model for JSON with optional IDs (only if OPENAI_API_KEY set)."""
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or not message.strip():
        return {}
    client = OpenAI(api_key=api_key)
    prompt = f"""From the user message, extract any of these if present: requisition_no (REQ...), po_no (PO...), invoice_no (INV...).
Return ONLY compact JSON: {{"requisition_no": "REQ123" or null, "po_no": null, "invoice_no": null}}
Message: {message}"""
    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": prompt}],
        temperature=0,
    )
    raw = (res.choices[0].message.content or "").strip()
    try:
        data = json.loads(raw)
    except json.JSONDecodeError:
        return {}
    out: Dict[str, str] = {}
    for k in ("requisition_no", "po_no", "invoice_no"):
        v = data.get(k)
        if v and isinstance(v, str) and v.strip():
            out[k] = v.strip().upper()
    return out


def extract_entities(message: str, use_llm_fallback: bool = True) -> Dict[str, str]:
    """Regex first; merge LLM fallback for any missing keys."""
    base = extract_entities_regex(message)
    if not use_llm_fallback:
        return base
    # Only call LLM if templates might need an ID but regex found nothing useful
    extra = _llm_extract_ids(message)
    merged = {**extra, **base}
    return merged


def parse_request_schema(raw: Any) -> Dict[str, Any]:
    if raw is None:
        return {}
    if isinstance(raw, dict):
        return raw
    if isinstance(raw, str):
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            return {}
    return {}
