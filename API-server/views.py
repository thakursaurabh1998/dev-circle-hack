from flask import Flask, request
from flask_cors import CORS
from flask_restful import Api, Resource, abort, reqparse
from random import randint
import json

from models import db


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)


# def abort_if_todo_doesnt_exist(todo_id):
#     if todo_id not in TODOS:
#         abort(404, message="Todo {} doesn't exist".format(todo_id))


parser = reqparse.RequestParser()
parser.add_argument('task')


class Donor(Resource):
    def get(self):
        donors = db.child('donors').get().val()
        data = [donors[i] for i in donors]
        # print(data)
        return data, 200

    def post(self):
        # args = parser.parse_args()
        # if request.headers['Content-Type'] == 'application/json':
            # print(request.json)
            db.child('donors').push(request.json)
            return request.json, 201
        # else:
        #     return 400


api.add_resource(Donor, '/donors')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8000', debug=True)
