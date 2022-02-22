
import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {

   

    if (props.items.length ===0)
    {
        return <h2 className='expenses-list__fallback'>No Expense found</h2>;
      
      }
    return (< ul className='expenses-list'>
        {
            props.items.map(item => {
                console.log("passing value", item);
                return <ExpenseItem
                  key={item.id}
                  expenseDate={item.date}
                  expenseTitle={item.title}
                  expenseAmount={item.amount}
                />
              })
             }
        </ul >);
    
}
export default ExpenseList;