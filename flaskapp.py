import os
import json
import requests
from datetime import datetime
from flask import Flask, request, flash, url_for, redirect, \
     render_template, abort, send_from_directory

app = Flask(__name__)
app.config.from_pyfile('flaskapp.cfg')

@app.route('/')
def index():
    upcoming =\
      requests.get("http://api.songkick.com/api/3.0/artists/864070/calendar.json?apikey=zdpZeMNcromcrzB4")
    past =\
      requests.get("http://api.songkick.com/api/3.0/artists/864070/gigography.json?apikey=zdpZeMNcromcrzB4")
    return render_template('index.html',
			   results_upcoming=upcoming.json(),
			   results_past=past.json())

@app.route('/tour_dates')
def tour_dates():
    return render_template('_tour_dates.html')

@app.route('/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/', resource)

@app.route("/test")
def test():
    return "<strong>It's Alive!</strong>"

if __name__ == '__main__':
    app.run(app.config['IP'], app.config['PORT'])
