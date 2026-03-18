def rbac_node(state):

    user_role = state.get("role")

    if user_role != "admin":
        return {"response": "Not authorized"}

    return state