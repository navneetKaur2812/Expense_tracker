import React, { useState}from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => { 
//    const[userInput,setUserInput] =useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: '',

//     });
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    const titleChangedhandler = (event) => {

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
           
        // });
        setEnteredTitle(event.target.value);
        
    }
    const dateChangedhandler = (event) => {
       
        setEnteredDate(event.target.value);
    }
    const amountChangedhandler = (event) => {
        setEnteredAmount(  event.target.value );
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
            
        };
        console.log(expenseData);
        { props.onSaveExpenseForm(expenseData) };
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangedhandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangedhandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangedhandler}/>
            </div>
           
        </div>
        <div className='new-expense__actions'>
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
  </form>;
};

export default ExpenseForm;
