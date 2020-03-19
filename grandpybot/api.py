from .settings.production import GOOGLE_API_KEY
import requests


class API:
    def __init__(self):
        self.api_key = None


class GoogleAPI:
    def __init__(self, place):
        self.place = place
        self.api_key = GOOGLE_API_KEY

    def find_location(self):
        url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
        params = {'query': self.place, 'key': self.api_key}
        r = requests.get(url, params=params)
        result = r.json()
        print(result)
        address = result['results'][0]['formatted_address']
        lat = result['results'][0]['geometry']['location']['lat']
        lng = result['results'][0]['geometry']['location']['lng']
        return address, lat, lng


class MediaWikiAPI:
    def __init__(self, place):
        self.place = place

    def find_page(self):
        url = 'https://fr.wikipedia.org/w/api.php'
        payload = {"action": "query",
                   "list": "search",
                   "srsearch": self.place,
                   "format": "json"}
        r = requests.get(url, params=payload)
        data = r.json()
        page = data["query"]["search"][0]["pageid"]
        return page

    def find_annecdote(self):
        url = 'https://fr.wikipedia.org/w/api.php'
        pageid = self.find_page()
        payload = {"action": "query",
                   "pageids": pageid,
                   "prop": "extracts|info",
                   "exintro": True,
                   "explaintext": True,
                   "inprop": "url",
                   "format": "json"}
        r = requests.get(url, params=payload)
        data = r.json()
        annecdote = data["query"]["pages"][str(pageid)]["extract"]
        url = data["query"]["pages"][str(pageid)]["fullurl"]
        return annecdote, url
