const { report, closeConnection, queryDB } = require("./db")

const showJoke = (jokeObj) => {
  console.log(`*****************************
Joke ${jokeObj.id}
Q: ${jokeObj.question}
${jokeObj.answer ? "A: " + jokeObj.answer : ""}

By: ${jokeObj.name}
*****************************\n`);
};


const showAllJokes = (jokeList) => {
  jokeList.forEach(showJoke)
}

const queryString = `
SELECT 
  jokes.*,
  authors.name,
  authors.description,
  authors.funny
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
`


queryDB(queryString)
  .then(showAllJokes)
  .catch(report)
  .finally(closeConnection)