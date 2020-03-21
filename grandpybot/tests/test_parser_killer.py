from grandpybot.chat_bot import ParserKiller, select_response, compact_answer
import os
from pathlib import Path
import json

dir_path = Path(__file__).resolve().parents[1]


class TestParserKiller:
    def test_parsing(self):
        parser = ParserKiller("Est-ce que tu connais l'adresse d'OpenClassrooms")
        assert parser.parse_sentence() == 'openclassrooms'


class TestSelectResponse:
    def get_data(self):
        with open(os.path.join(dir_path, 'response.json'), encoding='utf-8') as json_file:
            data = json.load(json_file)
            return data

    def test_select_response_success(self):
        response, i = select_response("success")
        data = self.get_data()
        assert response in data['success']
        assert data['success'][i] == response

    def test_select_response_failure(self):
        response, i = select_response("failure")
        data = self.get_data()
        assert response in data['failure']
        assert data['failure'][i] == response

    def test_select_response_anecdote(self):
        response, i = select_response("anecdote")
        data = self.get_data()
        assert response in data['anecdote']
        assert data['anecdote'][i] == response


def test_compact_answer():
    sentence = "Mr. Smith bought cheapsite.com for 1.5 million dollars, i.e. he paid a lot for it. " \
               "Did he mind? Adam Jones Jr. thinks he didn't."
    assert compact_answer(sentence) == "Mr. Smith bought cheapsite.com for 1.5 million dollars, i.e. " \
                                       "he paid a lot for it. Did he mind?"

