import React, { useState, useContext, MouseEventHandler } from "react";
import { Fragment } from "react";
import { GlobalContext, ITransaction } from "../ctx/GlobalState";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(amount);

    if (text.trim() === "") {
      alert("Text cannot be empty.");
      return;
    } else if (Number.isNaN(amount)) {
      alert("Amount must be a number.");
      return;
    }

    const transaction: ITransaction = {
      id: parseInt(Math.random().toString(36).substr(2, 9)),
      text: text,
      amount: amount,
    };
    addTransaction(transaction);
  };

  return (
    <Fragment>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={(e) => onSubmit(e)}>
          Add transaction
        </button>
      </form>
    </Fragment>
  );
};
