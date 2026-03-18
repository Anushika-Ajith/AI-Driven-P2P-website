from langgraph.graph import StateGraph
from state import GraphState

from nodes.memory_node import load_memory
from nodes.entity_node import extract_entities

# RAG FLOW
from nodes.rag_router_node import rag_router_node
from nodes.faq_node import faq_node
from nodes.knowledge_node import knowledge_node
from nodes.action_node import action_node
from nodes.fallback_node import fallback_node


builder = StateGraph(GraphState)

# BASIC FLOW
builder.add_node("memory", load_memory)
builder.add_node("entity", extract_entities)

# RAG FLOW
builder.add_node("rag_router", rag_router_node)
builder.add_node("faq", faq_node)
builder.add_node("knowledge", knowledge_node)
builder.add_node("action", action_node)

builder.set_entry_point("memory")

builder.add_edge("memory", "entity")
builder.add_edge("entity", "rag_router")
builder.add_node("fallback", fallback_node)
# 🔀 ROUTING
def decide(state):
    rag_type = state.get("rag_type")

    if rag_type == "faq":
        return "faq"
    elif rag_type == "knowledge":
        return "knowledge"
    elif rag_type == "action":
        return "action"
    elif rag_type == "fallback":
        return "fallback"

    return "fallback"

builder.add_conditional_edges(
    "rag_router",
    decide,
    {
        "faq": "faq",
        "knowledge": "knowledge",
        "action": "action",
        "fallback": "fallback"
    }
)

builder.set_finish_point("faq")
builder.set_finish_point("knowledge")
builder.set_finish_point("action")
builder.set_finish_point("fallback")


graph = builder.compile()