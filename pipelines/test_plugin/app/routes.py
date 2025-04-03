from flask import request, jsonify
from config import app, api_host, api_port
import threading
from functions import process_thread


@app.route('/')
def home():
    return {
        # Plugin information
        "name": "test_plugin",
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

@app.route('/process_job', methods=['POST'])
def handle_job_request():

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
