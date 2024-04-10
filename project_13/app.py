from flask import Flask, render_template, send_from_directory
import json

app = Flask(__name__,static_url_path='')

with open("textbooks.json","r") as f:
    textbooks = json.load(f)
    for textbook in textbooks:
        print(textbook)

@app.route('/')
def send_page():
    return render_template("chapter08-project03.html",textbooks=textbooks)


if __name__ == '__main__':

    app.run()