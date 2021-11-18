const {IP, PORT, inputKeys} = require("./constants");


const handleUserInput = function(key) {
  // Exits Game if Ctrl + c is pressed
  if (key === '\u0003') {
    process.exit();
  }
  if (inputKeys[key]) {
    connection.write(inputKeys[key]);
  }
};

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};