import os
from typing import Union
from dotenv import load_dotenv
from fastapi import FastAPI, Depends
from schemas import userPayload
from routers import get_user_info

load_dotenv()
app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.get("/secure")
async def root(user: userPayload = Depends(get_user_info)):
    return {"message": f"Hello {user.first_name} you have the access to the following service: {user.realm_roles}"}
