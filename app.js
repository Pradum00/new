import express from "express";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
const app = express();

// Connect to MongoDB

connectDB();
app.get("/", (req, res) => {
  res.send("<h1>Welcome to new page</h1>");
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
