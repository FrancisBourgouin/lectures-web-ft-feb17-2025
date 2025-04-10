# Tic-Tac-To!

# Project Description

A game of tic-tac-to, where players enter their names and then play!

# User Stories

Features of the app, from the perspective of a user (How a user would use our app)

- User can enter their names and start the game so they can who's turn it is
- User can restart the match once it's ended
- User can see the winner once a ttt is made on the board
- (Stretch) User can see their number of wins once they started to play

# Testing

End-to-End testing => 
Integration testing => 
Unit testing => Functions, Component in isolation

# Packages

## Frontend

- Vite
- Sass

# Data structure

## Users

```jsx
  const users = {
    player1:{
      name:"",
      wins:0
    },
    player2:{
      name:"",
      wins:0
    },
  }
```

## Game

STATE: REGISTER | WAITING | IN_PROGRESS | FINISHED 

```jsx
  const game = {
    state:"",
    board: [null 9 times],
    winner:null
  }
```



# HTML Structure


# Component Structure

- App
  - Header
  - GameForm
  - Game
  - Score

# Steps

# Test!