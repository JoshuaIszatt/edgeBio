# Database schema (MongoDB)
This provides an overview of the MongoDB database schema used in the system. It includes details about the collections, documents, and relationships between different entities.

## Collections
1. **Users**: Stores user information such as username, email, and password.
2. **Coordinator**: Stores available pipelines, configurations, and history

## Example Document Structure

#### Users Collection
```json
{
    "username": "johndoe",
    "email": "johndoe@example.com",
}
```

#### Coordinator Collection
```json
{
    "pipeline_id": "12345",
    "configuration": {
        "setting1": "value1",
        "setting2": "value2"
    },
    "history": [
        {
            "timestamp": "2023-10-01T12:00:00Z",
            "status": "completed"
        },
        {
            "timestamp": "2023-10-02T12:00:00Z",
            "status": "failed"
        }
    ]
}
```

## Relationships:
<img src="img/image_placeholder.png" width="500" />