from .settings.production import GOOGLE_API_KEY
import requests


class API:
    def __init__(self):
        self.api_key = None


class GoogleAPI:
    def __init__(self, place):
        self.place = place
        self.api_key = GOOGLE_API_KEY
        self.status = ""
        self.address = ""
        self.lat = 0
        self.lng = 0

    def find_location(self):
        url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
        params = {'query': self.place, 'key': self.api_key}
        r = requests.get(url, params=params)
        result = r.json()
        self.status = result['status']
        if self.status == 'OK':
            self.address = result['results'][0]['formatted_address']
            self.lat = result['results'][0]['geometry']['location']['lat']
            self.lng = result['results'][0]['geometry']['location']['lng']


class MediaWikiAPI:
    def __init__(self, place):
        self.place = place
        self.page = ''
        self.annecdote = ''
        self.url = ''

    def find_page(self):
        url = 'https://fr.wikipedia.org/w/api.php'
        payload = {"action": "query",
                   "list": "search",
                   "srsearch": self.place,
                   "format": "json"}
        r = requests.get(url, params=payload)
        data = r.json()
        self.page = data["query"]["search"][0]["pageid"]

    def find_annecdote(self):
        url = 'https://fr.wikipedia.org/w/api.php'
        if self.page == '':
            self.find_page()
        payload = {"action": "query",
                   "pageids": self.page,
                   "prop": "extracts|info",
                   "exintro": True,
                   "explaintext": True,
                   "inprop": "url",
                   "format": "json"}
        r = requests.get(url, params=payload)
        data = r.json()
        self.annecdote = data["query"]["pages"][str(self.page)]["extract"]
        self.url = data["query"]["pages"][str(self.page)]["fullurl"]
