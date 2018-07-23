# adapted from firebase/EventSource-Examples/python/chat.py by Shariq Hashme
import pyrebase
import json

config = {
    "apiKey": "AIzaSyBpWKMJY5M-JCteqVJKcfYBjePIiauQr8I",
    "authDomain": "dev-hack-49f85.firebaseapp.com",
    "databaseURL": "https://dev-hack-49f85.firebaseio.com",
    "projectId": "dev-hack-49f85",
    "storageBucket": "dev-hack-49f85.appspot.com",
    "messagingSenderId": "117240600813"
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()