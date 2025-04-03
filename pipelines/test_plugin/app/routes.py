from flask import request, jsonify
from config import app, api_host, api_port
import threading
from controllers import handle_job_request
from functions import write_log

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
def process_job():
    
    # Get the job data from the request
    job = request.get_json()
    
    # DEBUG
    write_log("Received job data")
    write_log(job)
    
    # Handle the job request
    thread = threading.Thread(target=handle_job_request, args=(job, api_host, api_port,))
    thread.start()
    
    # Response
    return jsonify({"status": "success", "received": job}), 200

