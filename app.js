const express = require("express");
const PORT = 3030;
const app = express();
const authorRoute = require("./author.route");

// Middleware
app.use(express.json());
app.use("/author", authorRoute);

app.get("/", (req, res) => {
  res.send(`Hello People`);
});
app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});

module.exports = app;
