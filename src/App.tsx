import { Fragment } from "react";
import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./ctx/GlobalState";

function App() {
  return (
    <Fragment>
      <GlobalProvider>
        <Header title={"Expense Tracker"} />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </Fragment>
  );
}

export default App;
