import React, { useState } from 'react';

import "./Expense.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
const Expense = (props) => {
  const [filetredYear, setFilteredYear] = useState('2020');
  
 
 
  const filterChangedhandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
    
  };

  const filteredExpense = props.items.filter(expense => { return expense.date.getFullYear().toString() === filetredYear });



 
  return (
    
    <Card className='expenses' >
      <ExpensesFilter selected={filetredYear} onChangeFilter={filterChangedhandler }/>
      <ExpenseChart expenses={filteredExpense }/>
      <ExpenseList items={filteredExpense} />
      
  
   
 
</Card>);
};

export default Expense;
