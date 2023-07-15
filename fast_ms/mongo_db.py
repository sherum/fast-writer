import pymongo
import certifi

from fast_ms.config import DB_URL


class Database():
    URI = DB_URL

    DB = None

    @staticmethod
    def initialize():
        client = pymongo.MongoClient(Database.URI, tlsCAFile=certifi.where())
        Database.DB = client['flask_model']

    @staticmethod
    def insert(coll, data):
        Database.DB[coll].insert_one(data)


    @staticmethod
    def update(coll, data):
        Database.DB[coll].update_one(data)


    @staticmethod
    def find(coll, query):
        return Database.DB[coll].find(query)


    @staticmethod
    def find_one(coll, query):
        return Database.DB[coll].find_one(query)
