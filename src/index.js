require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/task.routes");

const app = express();

connectDB();

app.use(express.json());
app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Secure-CRUD API is running" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});