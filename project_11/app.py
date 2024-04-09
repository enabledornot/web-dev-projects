from flask import Flask, render_template, send_from_directory
import json

app = Flask(__name__,static_url_path='')

with open("artwork.json","r") as f:
    artwork = json.load(f)

@app.route('/')
def send_page():
    return render_template("chapter08-project01.html",paintings=artwork)


if __name__ == '__main__':

    app.run()