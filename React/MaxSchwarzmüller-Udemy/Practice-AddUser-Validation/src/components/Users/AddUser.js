import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';
// import { useState } from 'react';

const AddUser = props => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('');

  const AddUserHandler = e => {
    e.preventDefault();

    if (enteredUsername.trim() === 0 || enteredAge.trim() === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setUsername('');
    setAge('');
  };

  const changeUsernameHandler = e => {
    setUsername(e.target.value);
  };

  const changeAgeHandler = e => {
    setAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={enteredUsername}
          onChange={changeUsernameHandler}
        />
        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          value={enteredAge}
          onChange={changeAgeHandler}
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
