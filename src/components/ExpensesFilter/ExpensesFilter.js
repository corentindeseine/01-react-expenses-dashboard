import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState('all_years');

  const listFilteredByYearHandler = (event) => {
    setSelectedYear(event.target.value)
  }

  props.onDateChanged(selectedYear)

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={listFilteredByYearHandler}>
          <option value='all_years'>All</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
