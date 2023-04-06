import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../Context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const DeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center text-center">
      {props.text}
      <div>
        <span className="btn btn-primary btn-sm rounded disabled">
          ₹{props.cost}
        </span>
        <TiDelete size="1.5rem" onClick={DeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
