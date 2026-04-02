def load_memory(state):
    print("[ASK][graph][memory] Entered memory node")
    history = state.get("conversation_history", [])
    history.append(state["user_message"])
    print("[ASK][graph][memory] Updated conversation history size:", len(history))

    return {
        "conversation_history": history
    }