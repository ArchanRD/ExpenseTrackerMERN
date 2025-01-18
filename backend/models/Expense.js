import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  expenseName: String,
  cost: Number,
  uid: String,
});

export const Expense = mongoose.model("expense", ExpenseSchema);
