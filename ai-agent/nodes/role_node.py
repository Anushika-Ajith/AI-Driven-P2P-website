def validate_role(state):

    role = state.get("user_role","store")
    intent = state["intent"]

    permissions = {
        "store": ["check_stock"],
        "manager": ["get_pending_approvals"],
        "purchase": ["create_pr"]
    }

    if intent not in permissions.get(role,[]):
        return {"response":"You are not authorized for this action"}

    return {}