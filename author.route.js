const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "Capitano Boss", pages: 1 });
});

router.get("/:authorId", (req, res) => {
  console.log(req.param);
  console.log(req.query);
  res.json({ name: "Author not found!", page: 230 });
});

router.post("/", (req, res) => {
  res.json({ message: "Author created successfully", books: req.body });
});

module.exports = router;
