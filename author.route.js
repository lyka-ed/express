const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ name: "Capitano Boss", pages: 1 });
});

router.get("/:authorId", (req, res) => {
  console.log(req.param);
  console.log(req.query);
  res.json({ name: "Xela Yadnus", page: 230 });
});

router.post("/", (req, res) => {
  res.json({ message: "Author added successfully", books: req.body });
});

router.put("/", (req, res) => {
  res.json({ message: "Author updated successfully" });
});

router.delete("/", (req, res) => {
  res.json({ message: "Author DELETED" });
});

module.exports = router;
