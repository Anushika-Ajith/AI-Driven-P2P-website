from services.pending_action_service import (
    get_pending_action,
    complete_pending_action
)


def load_memory(state):

    print("[ASK][pipeline][graph:memory] STEP — enter memory")

    user_id = state.get("user_id")

    pending = get_pending_action(user_id)

    if pending:

        print("Pending action found")

        state["user_message"] = (
            pending["original_query"]
            + " "
            + state["user_message"]
        )

        complete_pending_action(
            pending["id"]
        )

        state["pending_action_id"] = pending["id"]
        state["pending_action_name"] = pending["action_name"]

    history = state.get(
        "conversation_history",
        []
    )

    history.append(
        state["user_message"]
    )

    return {
        **state,
        "conversation_history": history
    }