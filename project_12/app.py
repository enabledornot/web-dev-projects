from flask import Flask, render_template, send_from_directory
import json
import os

app = Flask(__name__,static_url_path='')

with open("travels.json","r") as f:
    travels = json.load(f)

def read_images():
    images = {}
    for country in os.listdir("static/images"):
        if os.path.isfile("static/images/"+country):
            continue
        images[country] = []
        for image in os.listdir("static/images/"+country):
            images[country].append("images/{}/{}".format(country,image))
    # print(images)
    return images

@app.route('/')
def send_page():
    return render_template("chapter08-project02.html",travels=travels,images=read_images())
# print(read_images())

if __name__ == '__main__':

    app.run()