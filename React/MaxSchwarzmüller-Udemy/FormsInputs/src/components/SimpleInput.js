import { useState, useEffect } from 'react';
import useInput from './hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: enteredNameisValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const {
    value: enteredEmail,
    isValid: enteredEmailisValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEamailInput,
  } = useInput(ValidateEmail);

  // const [enteredName, setEnteredName] = useState('');
  // const [inputIsTouched, setInputIsTouched] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailInputIsTouched, setEmailInputIsTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  // const enteredNameisValid = enteredName.trim() !== '';
  // const nameInputIsInvalid = !enteredNameisValid && inputIsTouched;

  // const enteredEmailisValid =
  //   enteredEmail.trim() !== '' && ValidateEmail(enteredEmail);
  // const emailInputIsInvalid = !enteredEmailisValid && emailInputIsTouched;

  useEffect(() => {
    if (enteredNameisValid && enteredEmailisValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameisValid, enteredEmailisValid]);

  //email validation

  // every key stroke
  // const changeNameHandler = e => {
  //   setEnteredName(e.target.value);
  // };
  // const changeEmailHandler = e => {
  //   setEnteredEmail(e.target.value);
  // };

  // when lost focus
  // const nameInputBlurHandler = e => {
  //   setInputIsTouched(true);
  // };
  // const emailInputBlurHandler = e => {
  //   setEmailInputIsTouched(true);
  // };

  // on submit
  const submitHandler = e => {
    e.preventDefault();

    if (!enteredNameisValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    resetNameInput();
    resetEamailInput();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          // ref={refName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name field cannot be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Email is not valid.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
