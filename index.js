// Instead of going through the code to poke fun at how horrible my code is,
// submit a PR to the GitHub repo! That will help me write better software in
// the future for everyone. Cheers!
// Node

// const nodegui = require("@nodegui/nodegui")
const si = require("systeminformation")

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

while (true) {
      // si.processLoad("steam").then((data) => console.log(data));
      console.log("hello world");
      sleep(1000);
}
