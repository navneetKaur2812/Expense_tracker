
import { useState } from "react";
import "./App.css";
import Expense from "./Components/Expense/Expense";

import NewExpense from "./Components/NewExpense/NewExpense";
const dummy = [{
  id: 'e1',
  title: 'New Desk',
  amount: 450,
  date: new Date(2021,5,12)
},
{
  id: 'e2',
  title: 'New Almirah',
  amount: 489,
  date: new Date(2021,6,12)
}];
  


function App() {
  const [expenses, setExpenses] = useState(dummy);

  const onAddExpensehandler = (expense) => {
    console.log('in app.js', expense);
    setExpenses((prevExpenses) =>
    {
      return [expense,...prevExpenses];
    });
    console.log( expenses);
     
  };
  return (
    <>
      <NewExpense onAddExpense={onAddExpensehandler} /> 
      <Expense items={expenses}/>
    </>
    
  );
}

export default App;
