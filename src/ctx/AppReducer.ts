import { Action, ActionKind, IState } from "./GlobalState";

const AppReducer = (state: IState, action: Action): IState => {
  switch (action.type) {
    case ActionKind.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case ActionKind.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default AppReducer;
