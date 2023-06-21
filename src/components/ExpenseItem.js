import './ExpenseItem.css';
import React from 'react';

import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    // const [title,setTitle]=useState(props.title);


   
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={handleClick}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItem;