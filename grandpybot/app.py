from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

app.config.from_object('config')


@app.route('/')
def hello_world():
    return render_template('index.html', token="Hello Flask+React")


@app.route('/update/', methods=['POST'])
def update():
    data_byte = request.data

    my_json = data_byte.decode('utf8').replace("'", '"')
    data = json.loads(my_json)

    print(data)
    message = data
    new_message = message + " test"

    if new_message:
        result = 'success'
    else:
        result = 'error'

    return jsonify({'result': result, 'message': new_message})
