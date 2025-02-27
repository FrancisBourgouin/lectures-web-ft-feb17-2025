// let someName = "Pequeno Pollo de la Pampa";

// console.log(someName);

// setTimeout(() => {
//   someName = "Lil Chicken of the prairies"
// }, 1000);

// console.log(someName);

// console.log(5)
// sleep(5) RENDER BLOCKING NO ASYNC
// console.log(6)

let chickens = "🐔";

const chickenInterval = setInterval(() => {
  console.log((chickens += "🐔"));
}, 100);


setTimeout(() => {
  console.log("ENOUGH!")
  clearInterval(chickenInterval)
}, 2000)


let counter = 0
const potatoInterval = setInterval(() => {
  console.log("🥔")
  counter++

  if(counter > 10){
    clearInterval(potatoInterval)
  }
})