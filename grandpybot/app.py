from flask import Flask, render_template, request, jsonify
import json
from .chat_bot import ParserKiller, select_response
from .api import GoogleAPI, MediaWikiAPI

app = Flask(__name__)

app.config.from_object('config')


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/update/', methods=['POST'])
def update():
    data_byte = request.data

    my_json = data_byte.decode('utf8')

    data = json.loads(my_json)
    response = dict()

    sentence_parsed = ParserKiller(data).parse_sentence()
    place = GoogleAPI(sentence_parsed)
    place.find_location()
    response['status'] = place.status
    if place.status == 'OK':
        response['address'] = place.address
        response['location'] = dict()
        response['location']['lat'] = place.lat
        response['location']['lng'] = place.lng

        anecdote = MediaWikiAPI(place.address.split(",")[0])
        anecdote.find_annecdote()
        response['url'] = anecdote.url

        first_response, _ = select_response("success")
        response['first_message'] = first_response + place.address
        second_response, response['img'] = select_response("anecdote")
        response['second_message'] = second_response + anecdote.annecdote
    else:
        print(place.status)
        response['error_message'], response['error_img'] = select_response('failure')

    return jsonify(response)
