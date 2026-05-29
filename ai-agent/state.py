from typing import Any, Dict, List, TypedDict

from typing_extensions import NotRequired


class GraphState(TypedDict):
    user_id: str
    user_role: str
    user_message: str

    pending_action_id: str
    pending_action_name: str

    topic: str
    intent: str
    intent_distance: float
    product_name: str

    forecast_data: str
    requirements: str
    stock_level: str
    approvals_pending: str
    pr_created: str

    conversation_history: List[str]
    response: str
    structured_response: NotRequired[Dict[str, Any]]