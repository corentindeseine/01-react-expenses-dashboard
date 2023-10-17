import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /// Si on veut utiliser onChange={$NAME$ChangeHandler} ///

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // }

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // }

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // }

  /// Une seule fonction refacto prenant en compte 2 params ///

  const inputChangeHandler = (identifier, value) => {
    if (identifier ==='title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else  {
      setEnteredDate(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }


  return(
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={ (event) => inputChangeHandler('title', event.target.value) } />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='text' value={enteredAmount} min="0.0.1" step="0.0.1" onChange={ (event) => inputChangeHandler('amount', event.target.value) } />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate} min="2020-01-01" max="2023-12-31" onChange={ (event) => inputChangeHandler('date', event.target.value) } />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;
