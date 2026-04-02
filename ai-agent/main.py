import uuid
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
    req_id = str(uuid.uuid4())[:8]
    print(f"[ASK][pipeline][5/agent:{req_id}] POST /agent — request received")
    print(f"[ASK][pipeline][5/agent:{req_id}] payload:", data)

    state = {
        "user_id": data.get("user_id"),
        "user_role": data.get("role","store"),
        "user_message": data.get("message"),
        "conversation_history":[]
    }
    print(f"[ASK][pipeline][6/agent:{req_id}] Built initial graph state (user_message keys ok)")

    print(f"[ASK][pipeline][7/agent:{req_id}] LangGraph.invoke() starting…")
    result = graph.invoke(state)
    print(f"[ASK][pipeline][8/agent:{req_id}] LangGraph.invoke() finished")
    print(f"[ASK][pipeline][8/agent:{req_id}] result.response preview:", str(result.get("response", ""))[:200])

    out = {"response": result.get("response", "")}
    sr = result.get("structured_response")
    if sr is not None:
        out["structured"] = sr
    print(f"[ASK][pipeline][8/agent:{req_id}] Returning JSON to Nest (structured={'yes' if sr is not None else 'no'})")
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