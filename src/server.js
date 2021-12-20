import app from "./app.js";
import chalk from "chalk";

const serverOkLog = chalk.hex("#00ff00");

// Sets server port to 5000 unless a port is already assigned.
const { PORT = 5000 } = process.env;

// Listen on server
const listener = (req, res) => {
  console.log(serverOkLog(`Server running on port ${PORT}`));
};

app.listen(PORT, listener);
