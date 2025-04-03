import requests


def write_log(message):
    with open('./message_log.txt', 'a') as log_file:
        # Data received
        log_file.write(f"{message}\n")


def send_notification(url, id, status_update):
    write_log(f"DEBUG: sending {status_update} status update to {url}")
    notification = {
        "job": id,
        "notification": "Data processing",
        "status": status_update,
        "logging_level": "info",
    }
    try:
        response = requests.post(url, json=notification)
        response.raise_for_status()  # Raise an exception for HTTP errors
    except requests.exceptions.RequestException as e:
        print(f"Failed to send notification: {e}")


def assess_job_request(job=None):
    """
    Assess the job request for:
        - _id
    
    Return:
        - True if the job request is valid, False otherwise.
    """
    if job is None:
        write_log("Job request is None")
        return False
    
    if not isinstance(job, dict):
        write_log(f"Job request is not a dictionary: {job}")
        return False
    
    if '_id' not in job:
        write_log(f"Job request does not contain '_id': {job}")
        return False

    return True
