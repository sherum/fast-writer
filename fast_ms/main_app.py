import uvicorn
from fastapi import FastAPI, Cookie, Header, Request, Response
from starlette.middleware.cors import CORSMiddleware

from model.story import Story
from mongo_db import Database
from model.usercredential import *

app = FastAPI()
Database.initialize()

origins = [
    'http://localhost:4500',
    'http://localhost:8000'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def home():
    return "home page"


@app.post('/login', response_model=ServiceCredential)
def user_login(uname: str, cred: str):
    if uname is None or cred is None:
        return {"message": "invalid credentials"}
    else:
        return ServiceCredential(user_id='12345', session_id="abcdef")


@app.post('/register', response_model=ServiceCredential)
def register(uname: str, cred: str, email: str, account: str):
    user = Database.find('users', {'user_name': uname})
    if user:
        return {"message": "User account already exist"}
    else:
        return


@app.post('/story', response_model=Story)
def create_story(story: Story):
    # use session token to save to a specific UID
    # if db.find_one('users','userusercredential.user_name story.user_id
    result = Database.insert('stories', story)
    return Database.find_one('stories', {'_id': result['inserted_id']})


if __name__ == '__main__':
    uvicorn.run("main_app:app", reload=True)
