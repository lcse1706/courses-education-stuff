import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
// import { useState } from 'react';

const AddUser = props => {
  const [enteredUsername, setUsername] = useState('');
  const [enteredAge, setAge] = useState('');
  const [error, setError] = useState('');

  const AddUserHandler = e => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onSubmitError={errorHandler}
        />
      )}
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
    </Wrapper>
  );
};

export default AddUser;
