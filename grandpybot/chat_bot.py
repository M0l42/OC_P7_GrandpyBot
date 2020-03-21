import json
import re
import os
import random

dir_path = os.path.dirname(os.path.realpath(__file__))


class ParserKiller:
    def __init__(self, sentence):
        self.sentence = sentence

    def parse_sentence(self):
        """
        Keep only the letters and delete all common word
        :return:
             All the work we keep
        """
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
    """
    Get randomly an answer in repsponse.json depending on the status

    :param status:
    :return:
        response, random_choice
    """
    with open(os.path.join(dir_path, 'response.json'), encoding='utf-8') as json_file:
        data = json.load(json_file)
        chosen_status = data[status]
        random_choice = random.randrange(len(chosen_status))
        response = chosen_status[random_choice]

    return response, random_choice


def compact_answer(text):
    """
    Using a regular expression to get the first sentences of a text
    :param text:
    :return:
        The first two sentences
    """
    text.rstrip('\r\n')
    sentences = re.split(r'(?<=[^A-Z].[.?]) +(?=[A-Z])', text)
    print(sentences)
    return ' '.join(sentences[:1])
