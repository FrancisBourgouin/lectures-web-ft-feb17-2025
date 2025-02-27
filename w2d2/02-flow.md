# When to async ?

console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 1000);

console.log(4);



# STEPS

1. Run console.log(1) (SYNC)
2. Run setTimeout, set a callback fct(1) + time (SYNC)
3. Run setTimeout, set a callback fct(2) + time (SYNC)
4. Run console.log(4) (SYNC)
5. Check if there is anything in the event loop (ASYNC)
6. Wait a lil bit (ASYNC)
7. Do step 5 again until something changes (ASYNC)
8. fct(1) timer is done, do it (ASYNC)
9. fct(2) timer is done, do it (ASYNC)