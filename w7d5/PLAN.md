# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have? 4

Should we move sequentially or randomly? Randomly

# Data Structures

## Question

```jsx
const question = {
  id: "1",
  prompt: "",
  answer: "",
};
```

## Quiz Data

```jsx
const quizData = {
  currentQuestionIndex: 0,
  correctAnswers: 0,
  totalAnswers: 0,
  questions:[question, question] // YAY!
  questions: { 1: question, 2: question }; // ?
};
```

## Mode

```jsx
const mode = "QUIZ" | "ADD";
```

# HTML Structure

- body
  - header
    - Super Quiz of Destiny
  - main
    - section
      - score
      - total answered
    - form (answer question)
      - p prompt
      - input answer
      - button
    - form (add a question)
      - input prompt
      - input answer
      - button

# Component Structure

- App
  - Header
  - Results
  - QuizForm
  - QuestionForm
