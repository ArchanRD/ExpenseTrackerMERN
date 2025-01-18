import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import { User } from "./models/User.js";
import { Expense } from "./models/Expense.js";
import { comparePass, hashPass, signJWT } from "./utils/utils.js";
import { verifyToken } from "./middleware.js";

const app = express();
mongoose
  .connect("mongodb://localhost:27017/expenseTracker")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Err connecting to database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/**
 * Routes
 */

app.post("/register", async (req, res) => {
  const hashedPass = await hashPass(req.body.password);

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    password: hashedPass,
  });
  await user.save();
  res.status(200).json({ message: "User created sucessfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  const user = await User.find({ email: email });
  if (user.length > 0) {
    const passCheck = await comparePass(password, user[0].password);
    if (passCheck) {
      const token = signJWT({ userId: user[0]._id });
      res
        .status(200)
        .json({ message: "Login sucessfull", token, user: user[0]._id });
    } else {
      res.status(401).json({ message: "Invalid creds" });
    }
  } else {
    res.status(401).json({ message: "Invalid creds" });
  }
});

app.post("/create-expense", verifyToken, async (req, res) => {
  const { name, amount } = req.body;
  console.log(req.user);

  const expense = new Expense({
    cost: amount,
    expenseName: name,
    uid: req.user.userId,
  });
  await expense.save();
  res.status(200).json({ message: "Expense added" });
});

app.post("/fetch/:id", verifyToken, async (req, res) => {
  const uid = req.params.id;
  const expenses = await Expense.find({ uid: uid });
  res.status(200).json({ expenses });
});

app.delete("/delete/:eid", verifyToken, async (req, res) => {
  const eid = req.params.eid;
  const expenses = await Expense.deleteOne({ _id: eid });
  res.status(200).json({ expenses });
});

app.listen(3000, () => console.log("Running on port https://localhost:3000"));
