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