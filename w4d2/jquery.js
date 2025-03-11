// jQuery()

// $()

// $("css selector").action()
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}

const createArticle = (element) => {
  const $article = $("<article>")
  const $h1 = $("<h1>")
  const $p = $("<p>")

  $h1.text(element.title)
  $p.text(element.text)

  $article.append($h1)
  $article.append($p)

  return $article
}

const createArticleMaybeBad = (element) => {
  const articleContent = `
    <article>
      <h1>${element.title}</h1>
      <p>${element.text}</p>
    </article>
  `

  const $article = $(articleContent)

  return $article
}

$(() => {
  $("header h1").css("background-color"); // To read a css value
  $("header h1").css("background-color", "#bada55"); // To set a css value

  $("header h1").text(); // Will tell me the text
  $("header h1").text("Hello!"); // Will set the text


  $(document).on("click", event => {
    const element = event.target

    $(element).css("background-color", generateRandomColor())
  })

  for(const potato of potatoes){
    const $article = createArticle(potato)

    $("main section.posts").append($article)
  }
});
