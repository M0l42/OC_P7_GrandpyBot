from grandpybot.chat_bot import ParserKiller


class TestParserKiller:
    def test_parsing(self):
        parser = ParserKiller("Est-ce que tu connais l'adresse d'OpenClassrooms")
        assert parser.parse_sentence() == ['openclassrooms']
