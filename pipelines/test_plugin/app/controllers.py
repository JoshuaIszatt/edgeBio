from functions import write_log, send_notification, assess_job_request
import time

def handle_job_request(job, api_host, api_port):
    
    # Handle notifications
    notifications_url = f"http://{api_host}:{api_port}/notifications"
    write_log(f"Sending notifications to {notifications_url}")
    time.sleep(5)
    
    # Assess job request
    if assess_job_request(job) == False:
        write_log("Job request is invalid")
        return
    
    # Beginning pipeline
    write_log(f"Pipeline started")
    
    # "PROCESSING" notification
    send_notification(notifications_url, job["_id"], "processing")
    
    # Process the job
    time.sleep(10)
    
    # "FINISHED" notification
    send_notification(notifications_url, job["_id"], "finished")

    # Finish processing
    write_log(f"Pipeline finished")
    
    