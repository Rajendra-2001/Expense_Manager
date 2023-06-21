

import { useState } from "react";
import Expenses from "./components/Expenses";
import "./components/Expenses.css"
import expenseArray from "./components/expenseArray";
import "./components/newExp/NewExpense"
import NewExpense from "./components/newExp/NewExpense";

function App() {
  const [expenseList, setExpenseList] = useState(expenseArray);

  const addExpenseHandler = expense => {

    setExpenseList(prevExpenseList => {
      return [expense, ...prevExpenseList];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
}

export default App;
