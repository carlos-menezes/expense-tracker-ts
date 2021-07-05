import React, { useContext } from "react";
import { Fragment } from "react";
import { GlobalContext } from "../ctx/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((t) => (
          <Transaction key={t.id} transaction={t} />
        ))}
      </ul>
    </Fragment>
  );
};
