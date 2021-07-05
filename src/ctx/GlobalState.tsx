import React, { createContext, FunctionComponent, useReducer } from "react";
import AppReducer from "./AppReducer";

export enum ActionKind {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
}

export type Action = {
  type: ActionKind;
  payload: any;
};

export interface ITransaction {
  id: number;
  text: string;
  amount: number;
}

export interface IState {
  transactions: ITransaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: ITransaction) => void;
}

// Initial state
const initialState: IState = {
  transactions: [],
  addTransaction: () => {},
  deleteTransaction: () => {},
};

// Create context
export const GlobalContext = createContext<IState>(initialState);

// Create state provider
export const GlobalProvider: FunctionComponent = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id: number) => {
    dispatch({ type: ActionKind.DELETE_TRANSACTION, payload: id } as Action);
  };

  const addTransaction = (transaction: ITransaction) => {
    dispatch({
      type: ActionKind.ADD_TRANSACTION,
      payload: transaction,
    } as Action);
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
