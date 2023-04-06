import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  if (expenses.length > 0) {
    return (
      <ul className="list-group">
        {expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            text={expense.text}
            cost={expense.cost}
            key={expense.id}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <div className="alert alert-warning text-center">
        Hurray!! No expense at all
      </div>
    );
  }
};

export default ExpenseList;
