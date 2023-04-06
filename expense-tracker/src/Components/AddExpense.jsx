import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = (props) => {
  const { dispatch } = useContext(AppContext);

  const [text, setText] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      text,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    setText("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">Text</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <small
            className={`text-muted ${
              text.indexOf(" ") === 0 ? "visible" : "invisible"
            }`}
          >
            Enter proper details
          </small>
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
          <small
            className={` text-muted ${cost > 0 ? "invisible" : "visible"}`}
          >
            Value should be greater than zero{" "}
          </small>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
