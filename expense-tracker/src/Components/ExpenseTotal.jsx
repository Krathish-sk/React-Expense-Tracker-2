import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const cost = expenses.map((expense) => expense.cost);
  const totalSpent = cost.reduce((a, b) => (a += b), 0).toFixed(2);

  return (
    <div className="alert alert-primary">
      <span>Spent so far : ₹{totalSpent}</span>
    </div>
  );
};

export default ExpenseTotal;
