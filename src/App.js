import React from "react";
import { Heading } from "./Components/Heading";
import { Balance } from "./Components/Balance";
import { IncomeExpences } from "./Components/IncomeExpences";
import { TransactionList } from "./Components/TransactionList";
import { AddTransaction } from "./Components/AddTransaction";

import "./App.css";

function App() {
  return (
    <>
      <Heading />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
