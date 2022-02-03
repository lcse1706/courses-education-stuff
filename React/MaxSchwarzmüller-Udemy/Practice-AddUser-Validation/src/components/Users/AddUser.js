import React from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = props => {
  const AddUserHandler = e => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' />
        <button type='submimt'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
