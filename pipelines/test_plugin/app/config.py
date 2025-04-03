from flask import Flask
from flask_cors import CORS
import os

# Set debug mode
debug = os.getenv('DEBUG')
if debug is None:
    debug = True
elif debug.lower() == 'true':
    debug = True
elif debug.lower() == 'false':
    debug = False
else:
    raise ValueError("DEBUG must be 'true' or 'false'")

# Set API host and port
if debug is True or False:
    api_host = os.getenv('API_HOST')
    api_port = int(os.getenv('API_PORT'))
elif debug is None:
    api_host = 'localhost'
    api_port = 4000

# env variables
plugin_host = os.getenv('PLUGIN_HOST', 'localhost')
plugin_port = int(os.getenv('PLUGIN_PORT', 5000))

# Check env variables
if api_host is None:
    raise ValueError("API_HOST is not set")
if api_port is None:
    raise ValueError("API_PORT is not set")

# Instantiate flask and enable CORS
app = Flask(__name__)
app.config['DEBUG'] = debug
app.config['HOST'] = plugin_host
app.config['PORT'] = plugin_port
CORS(app)
