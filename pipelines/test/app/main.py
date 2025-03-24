from flask import Flask, request, jsonify
from flask_cors import CORS
import time
import threading
import requests

app = Flask(__name__)
CORS(app)

# Functions
def process_thread(data):
    # Simulate processing time
    time.sleep(10)

    # Log processing start
    with open('./message_log.txt', 'a') as log_file:
        log_file.write(f"{data['_id']}\t{data['name']}\tPROCESSING\n")

    # Send "data processing" notification
    """
    notification = {
        "job": data["_id"],
        "notification": "Data processing",
        "status": "processing"
    }
    requests.post('http://localhost:4000/notifications', json=notification)"
    """

    # Process file
    time.sleep(10)

    # Log processing end
    with open('./message_log.txt', 'a') as log_file:
        log_file.write(f"{data['_id']}\t{data['name']}\tFINISHED\n")
    
    # Send "completed" notification
    """
    notification = {
        "job": data["_id"],
        "notification": "Processing completed",
        "status": "finished"
    }
    requests.post('http://localhost:4000/notifications', json=notification)"
    """

# Home
@app.route('/')
def index():
    return "Hello, World!"

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
    app.run(debug=True)
