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
    setIsEdditing(false);
  };

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
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditingHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
