from flask import Flask, render_template, send_from_directory

app = Flask(__name__,static_url_path='')

@app.route('/')
def send_page():
    return render_template("chapter08-project01.html")


if __name__ == '__main__':

    app.run()