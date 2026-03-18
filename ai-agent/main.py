from fastapi import FastAPI
from graph import graph

app = FastAPI()
@app.get("/")
def home():
    return {"message": "AI Procurement Agent running"}
@app.post("/agent")

async def run_agent(data:dict):

    state = {
        "user_id": data.get("user_id"),
        "user_role": data.get("role","store"),
        "user_message": data.get("message"),
        "conversation_history":[]
    }

    result = graph.invoke(state)

    return {
        "response": result["response"]
    }

#dummy
@app.get("/approvals")
def approvals():
    return {"message": "You have 2 approvals pending"}

@app.post("/rfq/create")
def create_rfq():
    return {"message": "RFQ created successfully"}

@app.post("/po/approve")
def approve_po():
    return {"message": "PO approved"}

@app.get("/supplier/list")
def suppliers():
    return {"message": ["Vendor A", "Vendor B"]}