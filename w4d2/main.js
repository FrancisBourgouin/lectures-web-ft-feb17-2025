document.addEventListener("DOMContentLoaded", () => {
  // Everything stems from "document", every is a key inside the document object
  console.log(document.children[0].children[1].children[0].children[0].innerText);
  console.log(document.getElementsByTagName("h1")[0]);
  console.log(
    document.getElementById("chickenHeaderParty").getElementsByTagName("h1")[0]
  );
  console.log(document.querySelector("header h1"));
  console.log(document.querySelectorAll("h1"));

  const bob = document.querySelector("header h1");
  bob.innerText = "Another title";
  bob.innerText = "Another <span style='color:blue'>title</span>"; // Doesn't work!
  bob.innerHTML = "Another <span style='color:blue'>title</span>";
  bob.style.backgroundColor = "#bada55";

  document.querySelector("article").addEventListener("click", changeRandomFontSize);

  document.addEventListener("keydown", konamiAction);
});