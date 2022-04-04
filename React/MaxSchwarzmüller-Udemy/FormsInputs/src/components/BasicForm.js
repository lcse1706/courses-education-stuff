import { useState, useEffect } from 'react';
import useInputHook from './hooks/new-use-input';

const BasicForm = props => {
  const [formIsValid, setFormIsValid] = useState(false);

  const {
    value: enteredNameValue,
    changeInputHandler: changeNameInputHandler,
    blurHandler: nameBlurHandler,
    inputIsInvalid: nameInputIsInvalid,
    inputIsValid: nameInputIsValid,
    reset: nameInputReset,
  } = useInputHook(value => value.trim() !== '');

  const {
    value: enteredLastNameValue,
    changeInputHandler: changeLastNameInputHandler,
    blurHandler: lastNameBlurHandler,
    inputIsInvalid: lastNameInputIsInvalid,
    inputIsValid: lastNameInputIsValid,
    reset: lastNameInputReset,
  } = useInputHook(value => value.trim() !== '');

  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const {
    value: enteredEmailValue,
    changeInputHandler: changeEmailInputHandler,
    blurHandler: emailBlurHandler,
    inputIsInvalid: emailInputIsInvalid,
    inputIsValid: emailInputIsValid,
    reset: emailInputReset,
  } = useInputHook(ValidateEmail);

  useEffect(() => {
    if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [nameInputIsValid, lastNameInputIsValid, emailInputIsValid]);

  const submitFormHandler = e => {
    e.preventDefault();

    console.log(enteredNameValue);
    console.log(enteredLastNameValue);
    console.log(enteredEmailValue);

    setFormIsValid(false);

    nameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const nameInputClassHandler = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const lastNameInputClassHandler = lastNameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClassHandler = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>
        <div className={nameInputClassHandler}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={changeNameInputHandler}
            onBlur={nameBlurHandler}
            value={enteredNameValue}
          />
          {nameInputIsInvalid && <p>Please enter a name.</p>}
        </div>
        <div className={lastNameInputClassHandler}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            onChange={changeLastNameInputHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastNameValue}
          />
          {lastNameInputIsInvalid && <p>Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClassHandler}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={changeEmailInputHandler}
          onBlur={emailBlurHandler}
          value={enteredEmailValue}
        />
        {emailInputIsInvalid && <p>Email is Invalid.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
