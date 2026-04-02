"""
Thin wrapper around existing sync pgvector search (tools.vector_db).
Use this module so callers do not import DB helpers directly.
For true async I/O later, replace internals with asyncpg while keeping the same function names.
"""
from typing import Any, Dict, List

from tools.vector_db import search_vector_rows


def search_intent_rows(embedding: List[float], limit: int = 1) -> List[Dict[str, Any]]:
    return search_vector_rows("intent_router_vectors", embedding, limit=limit)


def search_action_rows(embedding: List[float], limit: int = 1) -> List[Dict[str, Any]]:
    return search_vector_rows("api_action_vectors", embedding, limit=limit)
