# API Documentation

## Create Quiz Results

Creates new quiz results.

- **Method:** POST
- **URL:** `/quiz-results`

### Request Body

The request should contain the following data in JSON format:

````json
{
  "email": "String",
  "quiz_id": "String",
  "results": [{
    "question_id": "String",
    "user_answer": "String",
    "correct_answer": "String"
  }]"
}
```

### Response
- **Status Code:**
    - `200 OK` on success
    - `500 Internal Server Error` on failure.

**Response Body (Example):**

```json
{
 {
    "_id": "65957058907c424cdd21ea35",
    "quiz_id": "39d92801-78d7-4122-aafc-2477a1941d52",
    "email": "19matos96@gmail.com",
    "results": [
        {
            "question_id": "1",
            "user_answer": "True",
            "correct_answer": "True",
            "_id": "65957058907c424cdd21ea36"
        },
        {
            "question_id": "2",
            "user_answer": "",
            "correct_answer": "False",
            "_id": "65957058907c424cdd21ea37"
        },
        {
            "question_id": "3",
            "user_answer": "True",
            "correct_answer": "False",
            "_id": "65957058907c424cdd21ea38"
        }
    ],
    "quiz_result_id": "89f9b2c2-99d5-4ad8-9eee-df06f5c46331",
    "createdAt": "2024-01-03T14:34:00.296Z",
    "updatedAt": "2024-01-03T14:34:00.296Z"
}
}
```
````
