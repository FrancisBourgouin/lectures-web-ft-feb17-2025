const matchArr = [1, 0, 0, 0, 0, 0, 0, 0, 1];

const isTicTacTo = (matchArr) => {
  // Horizontal wins
  for (let i = 0; i < 3; i++) {
    const element = matchArr[i + 0];
    if (element && matchArr[i + 1] === element && matchArr[i + 2] === element) {
      return { finished: true, winner: matchArr[i] };
    }
  }

  // Vertical wins
  for (let i = 0; i < 3; i++) {
    const element = matchArr[i + 0];
    if (element && matchArr[i + 3] === element && matchArr[i + 6] === element) {
      return { finished: true, winner: matchArr[i] };
    }
  }

  // Diagonal wins
  const topLeftElement = matchArr[0];
  if (
    topLeftElement &&
    matchArr[4] === topLeftElement &&
    matchArr[8] === topLeftElement
  ) {
    return { finished: true, winner: matchArr[0] };
  }
  const topRightElement = matchArr[2];
  if (
    topRightElement &&
    matchArr[4] === topRightElement &&
    matchArr[6] === topRightElement
  ) {
    return { finished: true, winner: matchArr[2] };
  }

  return { finished: false };
};

console.log(isTicTacTo(matchArr));
