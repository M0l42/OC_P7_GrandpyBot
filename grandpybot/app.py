from flask import Flask, render_template, request, jsonify
import json
from .chat_bot import ParserKiller
from .api import GoogleAPI, MediaWikiAPI

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

    sentence_parsed = ParserKiller(data).parse_sentence()
    # place = GoogleAPI(sentence_parsed).find_location()
    place = "7 Cité Paradis, 75010 Paris, France"
    annectode = MediaWikiAPI(place.split(",")[0]).find_annecdote()

    first_message = "Bien sûr mon poussin ! La voici : " + place
    second_message = "Sache que " + annectode

    result = "success"

    return jsonify({'result': result, 'first_message': first_message, "second_message": second_message})
