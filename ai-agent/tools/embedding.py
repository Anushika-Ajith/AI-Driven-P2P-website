from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def get_embedding(text: str):

    response = client.embeddings.create(
        model="text-embedding-3-small",  # requested dimensions: 768
        input=text,
         dimensions=768
    )

    return response.data[0].embedding