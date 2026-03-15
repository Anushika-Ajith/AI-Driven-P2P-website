def load_memory(state):
    history = state.get("conversation_history", [])
    history.append(state["user_message"])

    return {
        "conversation_history": history
    }