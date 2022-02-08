import React from 'react';
import "./ExpenseItem.css";
import Calendar from './Calendar';
import Card from './Card';
const ExpenseItem=({expenseTitle,expenseDate,expenseAmount})=> {
    
    return <Card className='expense-item'>
        <Calendar
            expenseDate={ expenseDate}/>
       <div className='expense-item__description'><h2>
            {expenseTitle}
        </h2></div> 
        <div className='expense-item__price'>${ expenseAmount}</div>
    </Card>;
}

export default ExpenseItem;
