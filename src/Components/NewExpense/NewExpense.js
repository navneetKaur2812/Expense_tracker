import React, { useState } from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onSaveExpenseFormHandler = (enteredexpenseData) => {
    const expenseData = {
      id: Math.random().toString,
      ...enteredexpenseData
    };
  
    { props.onAddExpense(expenseData) };
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return <div className='new-expense'>
     {!isEditing && <button onClick={startEditingHandler}>Add Expenses</button>} 
    {isEditing && <ExpenseForm onSaveExpenseForm={onSaveExpenseFormHandler} onCancel={stopEditingHandler} />}
  </div>;
};

export default NewExpense;
