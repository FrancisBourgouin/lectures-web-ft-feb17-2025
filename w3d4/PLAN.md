# Project

Secret vault of destiny!

# Purpose

Store a terrible secret, only accessible w/ username + password

# Data

## User

```jsx
const user = {
  id:
  name:
  email:
  password:
  secret:
};
```

## Users

Array: Index based =>
Object: Key based =>

```jsx
const users = { email: user, email: user }; // Easier!
const users = [user, user].find();
```

```jsx
const user1 = {
  name: "Dimitri Ivanovich Mendeleiv",
  password: "hydrogen",
  email: "periodic@table.com",
  secret: "He actually prefers biology over chemistry",
};

const user2 = {
  name: "Doug Judy",
  password: "rosa",
  email: "pontiac@bandit.com",
  secret: "He doesn't know how to drive stick",
};

const users = { "periodic@table.com": user1, "pontiac@bandit.com": user2 };
```

# Helpers

## getUserByEmail

INPUT: email
OUTPUT: Error (not found), userObject
OUTPUT SHAPE: { err:"", user:{} }

## authenticateUser

INPUT: email, password
OUTPUT: Error (not found || bad password), userObject
OUTPUT SHAPE: { err:"", user:{} }

## createUser

INPUT: email, password, name, secret
OUTPUT: Error (invalid field || existing user), userObject
OUTPUT SHAPE: { err:"", user:{} }





Higher Order Functions

- Is a function that takes a fct as a parameter
- It returns a function definition