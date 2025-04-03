import requests
import time
from config import api_host, api_port

# Functions
def process_thread(data):
    # API (backend) configuration
    url = f'http://{api_host}:{api_port}/notifications'
    
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
    