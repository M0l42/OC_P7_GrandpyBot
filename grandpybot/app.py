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

    sentence_parsed = ParserKiller(data).parse_sentence()
    place, lat, lng = GoogleAPI(sentence_parsed).find_location()
    anecdote, url = MediaWikiAPI(place.split(",")[0]).find_annecdote()

    first_response, j = select_response("success")
    first_message = first_response + place
    second_response, anecdote_choice = select_response("anecdote")
    second_message = second_response + anecdote

    result = "success"

    return jsonify({'result': result, 'first_message': first_message, "second_message": second_message, "url": url,
                    "img": anecdote_choice, "adress": place, 'location': {
                                                             'lat': lat,
                                                             'lng': lng}})
