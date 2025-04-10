import Game from "./components/Game";
import GameForm from "./components/GameForm";
import Header from "./components/Header";
import Score from "./components/Score";

import "./App.css";
import { useState } from "react";
import { checkIfTicTacTo } from "./helpers/gameHelpers";

// STATE: REGISTER | WAITING | IN_PROGRESS | FINISHED

function App() {
  const [users, setUsers] = useState(null);
  const [game, setGame] = useState({
    state: "REGISTER",
    board: [null, null, null, null, null, null, null, null, null],
    winner: null,
    turn: "player1",
  });

  const setUserData = (formData) => {
    const newUsers = {
      player1: {
        name: formData.player1,
        wins: 0,
      },
      player2: {
        name: formData.player2,
        wins: 0,
      },
    };

    setUsers(newUsers);
    setGame({ ...game, state: "IN_PROGRESS" });
  };

  const updateTile = (index) => {
    const updatedGame = { ...game };

    // M or B
    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn === "player1" ? "M" : "B";

    updatedGame.board = updatedBoard;

    const { finished } = checkIfTicTacTo(updatedGame.board);

    if (finished) {
      updatedGame.state = "FINISHED";
      setUsers({
        ...users,
        [game.turn]: { ...users[game.turn], wins: users[game.turn].wins + 1 },
      });
    } else {
      updatedGame.turn = game.turn === "player1" ? "player2" : "player1";
    }

    setGame(updatedGame);
  };

  const restartMatch = () => {
    setGame({
      state: "IN_PROGRESS",
      board: [null, null, null, null, null, null, null, null, null],
      winner: null,
      turn: "player1",
    });
  };

  return (
    <>
      <Header />
      {game.state === "REGISTER" && <GameForm onSubmit={setUserData} />}
      {game.state === "IN_PROGRESS" && <Game {...game} updateTile={updateTile} />}
      {game.state === "FINISHED" && (
        <Score game={game} restartMatch={restartMatch} users={users} />
      )}
    </>
  );
}

export default App;
