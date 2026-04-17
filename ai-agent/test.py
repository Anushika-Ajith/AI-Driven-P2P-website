# import os
# from dotenv import load_dotenv
# from openai import OpenAI
# load_dotenv()
# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# text = "show all requiremnts"
# r = client.embeddings.create(
#     model="text-embedding-3-small",
#     input=text,
#     dimensions=768,
# )
# vec = r.data[0].embedding
# print("dims:", len(vec))  # 768
# # pgvector literal: '[v1,v2,...]'::vector(768)
# vec_sql = "'[" + ",".join(f"{x:.8f}" for x in vec) + "]'::vector(768)"
# print(vec_sql)


import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

question = "register me"

r = client.embeddings.create(
    model="text-embedding-3-small",
    input=question,
    dimensions=768,
)
vec = r.data[0].embedding

print(len(vec))  # 768
print("'[" + ",".join(str(x) for x in vec) + "]'::vector(768)")