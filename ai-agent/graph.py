from langgraph.graph import StateGraph
from state import GraphState

from nodes.memory_node import load_memory
from nodes.topic_node import detect_topic
from nodes.intent_node import detect_intent
from nodes.entity_node import extract_entities
from nodes.role_node import validate_role
from router import router

builder = StateGraph(GraphState)

builder.add_node("memory", load_memory)
builder.add_node("topic", detect_topic)
builder.add_node("intent", detect_intent)
builder.add_node("entity", extract_entities)
builder.add_node("role", validate_role)
builder.add_node("router", router)

builder.set_entry_point("memory")

builder.add_edge("memory","topic")
builder.add_edge("topic","intent")
builder.add_edge("intent","entity")
builder.add_edge("entity","role")
builder.add_edge("role","router")

graph = builder.compile()