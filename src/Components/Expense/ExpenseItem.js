import React from 'react';
import "./ExpenseItem.css";
import Calendar from './Calendar';
import Card from '../UI/Card';
const ExpenseItem=(props)=> {
    console.log(props.expenseAmount);
    return(<li>
        <Card className='expense-item'>
        <Calendar
            expenseDate={ props.expenseDate}/>
       <div className='expense-item__description'><h2>
            {props.expenseTitle}
        </h2></div> 
        <div className='expense-item__price'>${ props.expenseAmount}</div>
        </Card>
    </li>);
}

export default ExpenseItem;
