// Promises vs Async/Await

// Syntax sugar
// const someArray = new Array()
// const anotherArray = []

const promiseWait = (timeInMs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I took ${timeInMs}ms to finish the task!`);
    }, timeInMs);
  });
};

promiseWait(2000).then(message => console.log(message))

const asyncWait = async (timeInMs) => {
  try{
    const message = await promiseWait(1000)
   
    console.log(message)

  } catch(err){
    console.log(err)
  }
};

console.log(asyncWait());