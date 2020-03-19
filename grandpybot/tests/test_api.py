from grandpybot.api import GoogleAPI, MediaWikiAPI


class FakeGoogle:
    def __init__(self, url, params):
        pass

    def json(self):
        return {
            'results':
                [{
                    'formatted_address': '7 Cité Paradis, 75010 Paris, France',
                    'geometry': {
                        "location": {
                            "lat": 48.8748465,
                            "lng": 2.3504873,
                        }
                    }
                }]
        }


class FakeMediaWiki:
    def __init__(self, url, params):
        pass

    def json(self):
        return {
            "query": {
                "pages": {
                    "5653202": {
                        "extract": "La cité Paradis est une voie publique située dans le 10e arrondissement de Paris.",
                        "fullurl": "https://fr.wikipedia.org/wiki/Cit%C3%A9_Paradis",
                    }
                },
                "search": [{
                    "pageid": 5653202,
                }]
            }
        }


class TestGoogleAPI:
    def test_find_place(self, monkeypatch):

        place = GoogleAPI("OpenClassrooms")

        monkeypatch.setattr("requests.get", FakeGoogle)

        address, lat, lng = place.find_location()

        assert address == '7 Cité Paradis, 75010 Paris, France'
        assert lat == 48.8748465
        assert lng == 2.3504873


class TestMediaWikiAPI:
    place = MediaWikiAPI("7 Cité Paradis")

    def test_find_page(self, monkeypatch):
        monkeypatch.setattr("requests.get", FakeMediaWiki)
        assert self.place.find_page() == 5653202

    def test_find_annecdote(self, monkeypatch):
        monkeypatch.setattr("requests.get", FakeMediaWiki)
        annectode, url = self.place.find_annecdote()
        assert annectode == "La cité Paradis est une voie publique située dans le 10e arrondissement de Paris."
        assert url == "https://fr.wikipedia.org/wiki/Cit%C3%A9_Paradis"
