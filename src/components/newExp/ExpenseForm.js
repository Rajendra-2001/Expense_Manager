import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');

    const [enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');


    const [addNewExpense, setNewExpense] = useState(false);


    const TitleChangeHandler = (event) => {

        setEnteredTitle(event.target.value);
    }

    const AmountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);
    }

    const DateChangeHandler = (event) => {

        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        

        const expenseData =
        {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),

        };

        props.onSaveExpenseData(expenseData);

        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");

        setNewExpense(false);//Hide the button after new expense is added
    }

    const newExpenseHandler = () => {
        setNewExpense(true);

    }
    const cancelHandler = () => {
        setNewExpense(false);
    }

    

    let newExpenseBtn;
    if (addNewExpense) {
        newExpenseBtn =
            (
                <form onSubmit={submitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={enteredTitle} onChange={TitleChangeHandler} />
                        </div>

                        <div className="new-expense__control">
                            <label>amount</label>
                            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler} />
                        </div>

                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2020-01-01" max="2024-12-31" value={enteredDate} onChange={DateChangeHandler} />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button onClick={cancelHandler}>Cancel</button>
                        <button type="submit" >Add Expense</button>
                    </div>
                </form>
            )
    }

    return (
        <div>
            {newExpenseBtn}
            {!addNewExpense && (
                <button onClick={() => newExpenseHandler()}>Add New Expense</button>
            )}
        </div>
    )
}
export default ExpenseForm;

