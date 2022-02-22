import React from 'react';
import './Calendar.css';

function Calendar({ expenseDate }) {
  
    const month = expenseDate?.toLocaleString('en-US', { month: 'long' });
    const day = expenseDate?.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseDate?.getFullYear();
    return <div className='calendar-date'>
        <div className='calendar-date__month'>{month}</div>
        <div className='calendar-date__day'>{day}</div>
        <div className='calendar-date__year'>{year}</div>
  </div>;
}

export default Calendar;
