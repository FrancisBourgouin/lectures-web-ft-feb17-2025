const pingWebsite = (timeInMs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I took ${timeInMs}ms to finish the task!`);
    }, timeInMs);
  });
};

// Promise.all([pingWebsite(1000), pingWebsite(5000)]).then(console.log)
Promise.race([pingWebsite(1000), pingWebsite(5000)]).then(console.log)
