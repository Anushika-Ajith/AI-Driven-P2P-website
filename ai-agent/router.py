from tools.inventory_tool import check_inventory
from tools.approval_tool import get_approvals
from tools.pr_tool import create_pr
from tools.knowledge_tool import rag_answer
from tools.forecast_tool import get_forecast
from tools.requirements_tool import get_requirements

def router(state):

    intent = state["intent"]
    product = state.get("product_name")

    if intent == "check_stock":
        return {"response": check_inventory(product)}

    if intent == "get_forecast":
        return {"response": get_forecast(product)}

    if intent == "get_pending_approvals":
        return {"response": get_approvals()}
    
    if intent == "get_requirements":
        return {"response": get_requirements(product)}

    if intent == "create_pr":
        return {"response": create_pr(product)}

    if intent == "procurement_knowledge":
        return {"response": rag_answer(state["user_message"])}

    return {"response":"I could not understand"}