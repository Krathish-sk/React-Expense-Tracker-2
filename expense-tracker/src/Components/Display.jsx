import React, { useState } from "react";
import AddExpense from "./AddExpense";
import Budget from "./Budget";
import ExpenseList from "./ExpenseList";
import ExpenseTotal from "./ExpenseTotal";
import Remaining from "./Remaining";

const Display = () => {
  const [addExpense, setAddExpense] = useState(false);
  console.log(addExpense);

  return (
    <>
      <h2 className="mt-3 text-center">My Budget Planner</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
      <h3 className="mt-3 text-center">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary text-center"
          onClick={() => setAddExpense((prev) => !prev)}
        >
          Add Expenses{" "}
        </button>
      </div>
      <h3 className="mt-4 text-center">Add Expense</h3>
      <div className="row mt-8">
        <div className="col-sm">
          <AddExpense />
        </div>
      </div>
    </>
  );
};

export default Display;
