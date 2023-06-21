import { useState } from "react";
// import expensesArray from "./expenseArray";
import ExpensesFilter from "./newExp/ExpensesFilter";
import ExpensesList from "./newExp/ExpensesList";
import ExpenseChart from "../components/newExp/ExpenseChart"

const Expenses = ({ items }) => {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList item={filteredExpenses} />
      </div>
    </div>
  );
};

export default Expenses;
