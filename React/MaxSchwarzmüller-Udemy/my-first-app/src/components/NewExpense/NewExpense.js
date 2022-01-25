import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEdditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // const addNewExpense = () => {
  //   console.log('adujemy');
  // };

  const startEditingHandler = () => {
    setIsEdditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEdditing(false);
  };

  return (
    <div className='new-expense'>
      {isEditing ? (
        <ExpenseForm
          cancelEditing={cancelEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* {<button onClick={startEditingHandler}>Add New Expense</button>}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> */}
    </div>
  );
};

export default NewExpense;
