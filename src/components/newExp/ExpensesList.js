import React from "react";
import ExpenseItem from "../ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense, index) => (
        <ExpenseItem
          key={index}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
