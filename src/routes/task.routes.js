const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
});

module.exports = router;