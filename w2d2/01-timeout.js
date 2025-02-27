const EventEmitter = require("events");

const homeSetTimeout = new EventEmitter();

homeSetTimeout.on("timerDone", () => console.log(2));

// homeSetTimeout.emit("timerDone")

console.log(1);

// Is setTimeout asynchronous????

setTimeout(() => {
  console.log(3);
}, 0);

setTimeout(() => {
  console.log(2);
}, 0);


console.log(4);

// 1 4 WAIT 2 WAIT 3
// 1 4 WAIT 2 3

const alarmClock = new EventEmitter();

// On the event of a morningAlarm
alarmClock.on("morningAlarm", () => console.log("RIING RIING ITS MORNING TIME"));

// On the event of a endOfWorkAlarm
alarmClock.on("endOfWorkAlarm", () => console.log("PARTY TIME GO HOME !"));

// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
// alarmClock.emit("morningAlarm")
