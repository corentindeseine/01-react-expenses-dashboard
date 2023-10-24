import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter((expense) => {
    const expenseYear = expense.date.getFullYear();
    return expenseYear.toString() === filteredYear
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length === 0 && <p className="no-expenses">No expenses found.</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))
      }
    </Card>
  );
}

export default Expenses;
