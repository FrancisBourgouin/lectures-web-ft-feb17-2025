const changeRandomFontSize = () => {
  const article = document.querySelector("article");
  const randomSize = Math.floor(Math.random() * 30) + 16;

  article.style.fontSize = `${randomSize}px`;
};

const parsePotatoData = (potatoData) => {
  const main = document.querySelector("main");

  for (const potato of potatoData) {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.innerText = potato.title;
    p.innerText = potato.text;

    article.append(h1);
    article.append(p);

    main.append(article);
  }
};

const konamiAction = (event) => {
  if (index === 9) {
    document.querySelector("header h1").style.fontSize = "50px";
    document.querySelector("header h1").innerText = "KONAMI 4 LIFE!";
  }
  if (event.key === konamiSequence[index]) {
    index++;
  }
};

let index = 0;

const konamiSequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
