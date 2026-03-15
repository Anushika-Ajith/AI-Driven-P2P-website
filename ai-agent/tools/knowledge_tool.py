from openai import OpenAI

client = OpenAI()

def rag_answer(question):

    prompt = f"""
Answer procurement question:

{question}
"""

    res = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role":"user","content":prompt}]
    )

    return res.choices[0].message.content