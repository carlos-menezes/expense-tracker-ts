import React, { useContext } from "react";
import { GlobalContext, ITransaction } from "../ctx/GlobalState";

interface TransactionProps {
  transaction: ITransaction;
}

export const Transaction = ({ transaction }: TransactionProps) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li className={sign === "-" ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
};
