from pydantic import BaseModel
from uuid import uuid4

class Story(BaseModel):
    id: str = uuid4().hex
    title: str
    user_id: str
    author: str
    genre: str
    maguffin: str
    summary: str
    people:set
    locations:set
    events:set
    things:set
    scenes:set
    plots:set

