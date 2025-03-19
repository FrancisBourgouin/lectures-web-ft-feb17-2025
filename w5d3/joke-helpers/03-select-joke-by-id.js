const { report, closeConnection, queryDB } = require("./db")

const showJoke = (jokeObj) => {
  console.log(`*****************************
Joke ${jokeObj.id}
Q: ${jokeObj.question}
${jokeObj.answer ? "A: " + jokeObj.answer : ""}

By: ${jokeObj.name}
*****************************\n`);
};


const queryString = `
SELECT 
  jokes.*,
  authors.name,
  authors.description,
  authors.funny
FROM jokes
JOIN authors
ON jokes.author_id = authors.id
WHERE jokes.id = $1
`

const queryArguments = [process.argv[2]]


queryDB(queryString, queryArguments)
  .then(showJoke)
  .catch(report)
  .finally(closeConnection)



// res.render("nameOfTemplate", templateVars)