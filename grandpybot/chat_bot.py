import json
import re
import os
import random

dir_path = os.path.dirname(os.path.realpath(__file__))


class ParserKiller:
    def __init__(self, sentence):
        self.sentence = sentence

    def parse_sentence(self):
        self.sentence = re.sub(r'[^\w\s]', ' ', self.sentence)
        self.sentence = self.sentence.lower()
        list_of_word = self.sentence.split(" ")
        keep_word = []

        with open(os.path.join(dir_path, 'fr.json'), encoding='utf-8') as json_data:
            data_dict = json.load(json_data)
            for word in list_of_word:
                if word not in data_dict:
                    keep_word.append(word)

        return ' '.join(keep_word)


def select_response(status):
    with open(os.path.join(dir_path, 'response.json'), encoding='utf-8') as json_file:
        data = json.load(json_file)
        choosen_status = data[status]
        random_choice = random.randrange(len(choosen_status))
        response = choosen_status[random_choice]

    return response, random_choice
