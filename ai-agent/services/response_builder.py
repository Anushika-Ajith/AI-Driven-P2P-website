"""
Structured responses for UI navigation vs API execution.
"""
import re
from typing import Any, Dict, List, Optional
from urllib.parse import urljoin


def list_placeholders(*templates: Optional[str]) -> List[str]:
    names: List[str] = []
    for t in templates:
        if not t:
            continue
        names.extend(re.findall(r"\{([^}]+)\}", t))
    # preserve order, unique
    seen = set()
    out: List[str] = []
    for n in names:
        if n not in seen:
            seen.add(n)
            out.append(n)
    return out


def substitute_template(template: str, entities: Dict[str, str]) -> str:
    """Replace {param} with entities[param]."""

    def repl(m: re.Match) -> str:
        key = m.group(1)
        val = entities.get(key)
        if val is None:
            return m.group(0)
        return str(val)

    return re.sub(r"\{([^}]+)\}", repl, template)


def build_navigation(
    message: str,
    route: str,
    api_endpoint: Optional[str] = None,
) -> Dict[str, Any]:
    full_url = None
    if api_endpoint and route:
        # Combine host/base URL + route into one clickable URL.
        full_url = urljoin(api_endpoint.rstrip("/") + "/", route.lstrip("/"))

    return {
        "type": "navigation",
        "route": route,
        "api_endpoint": api_endpoint,
        "full_url": full_url,
        "message": message,
        "missing_params": [],
    }


def build_api(
    message: str,
    api_endpoint: Optional[str],
) -> Dict[str, Any]:
    return {
        "type": "api",
        "route": None,
        "api_endpoint": api_endpoint,
        "message": message,
        "missing_params": [],
    }


def build_text(message: str) -> Dict[str, Any]:
    return {
        "type": "text",
        "route": None,
        "api_endpoint": None,
        "message": message,
        "missing_params": [],
    }


def build_clarification(
    missing_params: List[str],
    message: str,
) -> Dict[str, Any]:
    return {
        "type": "clarification",
        "route": None,
        "api_endpoint": None,
        "message": message,
        "missing_params": missing_params,
    }


def join_ui_route(ui_route: Optional[str], path: str) -> str:
    """Combine SPA base (ui_route) with relative path."""
    if not ui_route:
        return path
    u = ui_route.rstrip("/")
    p = path.lstrip("/")
    return f"{u}/{p}" if p else u
