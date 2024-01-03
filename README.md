# Back Coding Challenge

## Overview

Your main goal is to create an API to generate quizz with random questions and be able to register answers to that quizz, with true or false answers in the technology you are applying to work in. 
**You should not just implement the most basic solution. This is a chance to show off your abilities and impress.**

**The final result code will be reviewed agains:**

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of best practices
- State management
- Side effects handling

## Goals

Implement the API with the bellow especifications. 
Implement the screens based off the wireframes and api below. Note that the requirements may not be complete, so use your best judgment for  implementation. **You can use any framework but Do not use a boilerplates .** We want to see how you structure your project and what tooling you use from scratch. 

## Specifications



the API should have endpoints to CRUD the quizz, and to CRUD answers from users

the quizz creation endpoint should recive the name of the quizz and and return the new quizz with random questions
to generate the questions the backend could use the following helper url 
The api url is: https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean

the structure of the quizz is as follows:

Sample returned json:

```javascript
{
  "id", 1
  "name", "Quiz x"
  "response_code": 0,
  "results": [
    {
      "question_id":1,
      "category": "Entertainment: Video Games",
      "type": "boolean",
      "difficulty": "hard",
      "question": "Unturned originally started as a Roblox game.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },…]}
```

to store the results the endpoint should revice 
the user email address the quizz_id and the responses.

for both the quizz and results CRUD all operations should be supported (create, read, update, delete)


### Intro / Home Screen:

![The Intro screen for the app](https://raw.githubusercontent.com/g2i/code-challenge-static-assets/master/Intro.png "The intro screen for the app")

- Static Text
- BEGIN button navigates to the Quiz screen and starts the Quiz

### Deliverables:
- Code repository
- API working in some free host.
- API documentation


