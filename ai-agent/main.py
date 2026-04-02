from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from graph import graph

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:3002",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def home():
    return {"message": "AI Procurement Agent running"}
@app.post("/agent")

async def run_agent(data:dict):
    print("[ASK][agent] /agent request payload:", data)

    state = {
        "user_id": data.get("user_id"),
        "user_role": data.get("role","store"),
        "user_message": data.get("message"),
        "conversation_history":[]
    }
    print("[ASK][agent] Initial graph state:", state)

    print("[ASK][agent] Invoking graph...")
    result = graph.invoke(state)
    print("[ASK][agent] Graph completed. Final result:", result)

    out = {"response": result.get("response", "")}
    sr = result.get("structured_response")
    if sr is not None:
        out["structured"] = sr
    return out

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