from grandpybot.api import GoogleAPI, MediaWikiAPI
import urllib.request
import json

from io import BytesIO


class TestGoogleAPI:
    def test_find_place(self, monkeypatch):
        result = [{
            'results':
                [{
                    'formatted_address': '7 Cité Paradis, 75010 Paris, France',
                }]
        }]

        def mockreturn(request):
            return BytesIO(json.dumps(result).encode())

        place = GoogleAPI("OpenClassrooms")

        monkeypatch.setattr(urllib.request, 'urlopen', mockreturn)

        assert place.find_location() == '7 Cité Paradis, 75010 Paris, France'


class TestMediaWikiAPI:
    def test_find_annecdote(self, monkeypatch):
        result = None

        def mockreturn(request):
            return BytesIO(json.dumps(result).encode())

        place = MediaWikiAPI("Cité Paradis")

        monkeypatch.setattr(urllib.request, 'urlopen', mockreturn)
        assert place.find_annecdote() == "La cité Paradis est une voie publique située dans le 10e arrondissement de Paris."
