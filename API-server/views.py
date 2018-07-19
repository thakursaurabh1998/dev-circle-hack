from flask import Flask, request
from flask_restful import Api, Resource, abort, reqparse
from random import randint

from models import db


app = Flask(__name__)
api = Api(app)

TODOS = db.child('todos').get().val()

todos = db.child('todos')


def abort_if_todo_doesnt_exist(todo_id):
    if todo_id not in TODOS:
        abort(404, message="Todo {} doesn't exist".format(todo_id))


parser = reqparse.RequestParser()
parser.add_argument('task')


# Todo
# shows a single todo item and lets you delete a todo item
class Todo(Resource):
    def get(self, todo_id):
        todo = todos.child(todo_id).get().val()
        if(todo==None):
            abort_if_todo_doesnt_exist(todo_id)
        return todo

    def delete(self, todo_id):
        abort_if_todo_doesnt_exist(todo_id)
        del TODOS[todo_id]
        return '', 204

    def put(self, todo_id):
        args = parser.parse_args()
        task = {'task': args['task']}
        TODOS[todo_id] = task
        return task, 201


# TodoList
# shows a list of all todos, and lets you POST to add new tasks
class TodoList(Resource):
    def get(self):
        return todos.get().val()

    def put(self):
        args = parser.parse_args()
        lastTodo = todos.shallow().get().val()
        todo_id = int(max(lastTodo).lstrip('todo')) + 1
        newTodo = todos.child('todos').child('todo{}'.format(todo_id)).set({'task': args['task']})
        return newTodo, 201


##
# Actually setup the Api resource routing here
##
api.add_resource(TodoList, '/todos')
api.add_resource(Todo, '/todos/<todo_id>')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='8000', debug=True)
