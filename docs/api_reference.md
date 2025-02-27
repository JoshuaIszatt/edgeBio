# API Reference Template

## Rate Limiting
- **Max requests per minute:** `100`
- **Max concurrent requests per user:** `5`

## Overview
This document provides details on the API endpoints, request/response formats, and WebSocket events for real-time feedback.

**Base URL:**  
- `http://<backend-url>/api` (Express backend)
- WebSocket: `ws://<backend-url>`

---

## Endpoints

### **1. File Upload**
#### `POST /upload`
Uploads a sequencing data file for processing.

**Request:**
- `multipart/form-data`
- Form field: `file` (the sequencing file)

**Response:**
```json
{
  "success": <boolean>,
  "message": "<status_message>",
  "fileId": "<file_identifier>"
}
```

---

### **2. Job Submission**
#### `POST /jobs`
Submits a new sequencing job to the queue.

**Request:**
```json
{
  "fileId": "<file_identifier>",
  "parameters": {
    "pipeline": "<pipeline_name>",
    "threads": <integer>
  }
}
```

**Response:**
```json
{
  "jobId": "<job_identifier>",
  "status": "queued"
}
```

---

### **3. Job Status**
#### `GET /jobs/:jobId`
Fetches the status of a specific job.

**Response:**
```json
{
  "jobId": "<job_identifier>",
  "status": "<status>",
  "progress": <integer>
}
```

---

### **4. Job Logs**
#### `GET /jobs/:jobId/logs`
Retrieves logs related to a specific job.

**Response:**
```json
{
  "jobId": "<job_identifier>",
  "logs": [
    "<log_entry_1>",
    "<log_entry_2>"
  ]
}
```

---

### **5. Cancel Job**
#### `DELETE /jobs/:jobId`
Cancels a job if it has not started yet.

**Response:**
```json
{
  "success": <boolean>,
  "message": "<status_message>"
}
```

---

### **6. WebSocket Events**
WebSockets are used to provide real-time updates on job status.

**Connection:**  
```javascript
const socket = new WebSocket("ws://<backend-url>");

socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Job Update:", data);
};
```

#### **Event: `job_update`**
Real-time updates on job progress.

**Message Format:**
```json
{
  "jobId": "<job_identifier>",
  "status": "<status>",
  "progress": <integer>
}
```

#### **Event: `job_complete`**
Sent when a job is finished.

**Message Format:**
```json
{
  "jobId": "<job_identifier>",
  "status": "complete",
  "output": "<output_file>"
}
```

---

## Error Handling
Errors will return a **400/500** status code with a JSON response:

```json
{
  "error": "<error_message>"
}
```

Common error messages:
- `400 Bad Request` - Invalid parameters
- `404 Not Found` - Job or resource not found
- `500 Internal Server Error` - Unexpected issue

---

## Future Enhancements
- User management endpoints (`/users`)
- Enhanced job priority handling

