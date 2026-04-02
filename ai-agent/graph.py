from langgraph.graph import StateGraph
from state import GraphState

from nodes.memory_node import load_memory
from nodes.entity_node import extract_entities

# INTENT ROUTING (first decision after user query)
from nodes.intent_router_node import intent_router_node
from nodes.faq_node import faq_node
from nodes.knowledge_node import knowledge_node
from nodes.action_node import action_node
from nodes.fallback_node import fallback_node


builder = StateGraph(GraphState)

# BASIC FLOW
builder.add_node("memory", load_memory)
builder.add_node("entity", extract_entities)

# INTENT FLOW
builder.add_node("intent_router", intent_router_node)
builder.add_node("faq", faq_node)
builder.add_node("knowledge", knowledge_node)
builder.add_node("action", action_node)

builder.set_entry_point("memory")

builder.add_edge("memory", "entity")
builder.add_edge("entity", "intent_router")
builder.add_node("fallback", fallback_node)
# 🔀 ROUTING
def decide(state):
    intent = (state.get("intent") or "").lower()
    print("[ASK][graph] Routing decision. intent=", intent, "distance=", state.get("intent_distance"))

    if intent == "faq":
        return "faq"
    elif intent == "knowledge":
        return "knowledge"
    elif intent == "action":
        return "action"
    return "fallback"

builder.add_conditional_edges(
    "intent_router",
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