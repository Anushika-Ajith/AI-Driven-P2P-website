def load_memory(state):
    print("[ASK][pipeline][graph:memory] STEP — enter memory node")
    history = state.get("conversation_history", [])
    history.append(state["user_message"])
    print("[ASK][pipeline][graph:memory] STEP — conversation_history length:", len(history))
    print("[ASK][pipeline][graph:memory] STEP — exit memory → edge to entity")

    return {
        "conversation_history": history
    }