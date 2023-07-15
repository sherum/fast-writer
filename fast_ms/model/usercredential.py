from pydantic import BaseModel
from passlib.context import CryptContext


pwd_context = CryptContext(schemes=['bcrypt'])

class UserCredential(BaseModel):
    user_name:str
    password:str

class UserProfile(BaseModel):
    user_id:str
    user_email:str
    user_name:str
    account_type:str
    password_hash:str = ""

    def set_password(self,password):
        self.password_hash = pwd_context.hash(password)

    def verify_password(self,password):
        return pwd_context.verify(password,self.password_hash)

class ServiceCredential(BaseModel):
    user_id:str
    session_id:str


