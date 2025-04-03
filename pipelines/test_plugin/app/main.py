import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import threading
import requests

# App configuration
app = Flask(__name__)
CORS(app)

# API (backend) configuration
api_host = os.getenv('API_HOST', '127.0.0.1')
api_port = int(os.getenv('API_PORT', 4000))
url = f'http://{api_host}:{api_port}/notifications'

# Functions
def process_thread(data):
    
    # Simulate processing time
    time.sleep(10)

    # Log processing start
    with open('./message_log.txt', 'a') as log_file:
        log_file.write(f"{data['_id']}\t{data['name']}\tPROCESSING\n")

    # Send "data processing" notification
    notification = {
        "job": data["_id"],
        "notification": "Data processing",
        "status": "processing",
        "logging_level": "info",
    }
    requests.post(url, json=notification)

    # Process file
    time.sleep(10)

    # Log processing end
    with open('./message_log.txt', 'a') as log_file:
        log_file.write(f"{data['_id']}\t{data['name']}\tFINISHED\n")
    
    # Send "completed" notification
    notification = {
        "job": data["_id"],
        "notification": "Processing completed",
        "status": "finished",
        "logging_level": "info",
    }
    requests.post(url, json=notification)
    
    # Log processing end
    with open('./message_log.txt', 'a') as log_file:
        log_file.write(f"{data['_id']}\t{data['name']}\tEND PIPELINE\n")


# Home
@app.route('/')
def index():
    return {
        # Plugin information
        "name": "pyTEST",
        "version": "0.1",
        "description": "This is a test / template pipeline for edgeBIO plugins.",
        # Pipeline input
        "input": {
            "requires_file": False,
            "file_types": None
        },
        # Pipeline output
        "output": {
            "notifications": True,
            "data": False
        },
        # Endpoints
        "endpoints": {
            "home": "/",
            "process_job": "/process_job",
        }
    }

# Process job
@app.route('/process_job', methods=['POST'])
def process_job():

    # Get data from request
    data = request.get_json()
    
    # Print to console
    print(data)
    
    # Write to log file
    with open('./message_log.txt', 'a') as log_file:
        # Data received
        log_file.write(f"{data['_id']}\t{data['name']}\tRECEIVED\n")

        # Create a new thread to process the job
        thread = threading.Thread(target=process_thread, args=(data,))
        thread.start()
        
        # Return response
        return jsonify({"status": "success", "received": data}), 200


if __name__ == '__main__':
    
    # Server configuration
    host = os.getenv('HOST', '127.0.0.1')
    port = int(os.getenv('PORT', 5000))
    
    # Run 
    app.run(host=host, port=port, debug=True)
