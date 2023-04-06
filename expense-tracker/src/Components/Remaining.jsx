import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const cost = expenses.map((expense) => expense.cost);
  const totalExpense = cost.reduce((a, b) => (a += b), 0).toFixed(2);

  const remaining = budget - totalExpense;
  const alertType = remaining > 0 ? "alert-warning" : "alert-danger";
  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining : ₹{remaining}</span>
    </div>
  );
};

export default Remaining;
