import { useState, useEffect } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  // const [enteredNameisValid, setEnteredNameValid] = useState(false);
  // const refName = useRef();

  const ValidateEmail = mail => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    // alert('You have entered an invalid email address!');
    return false;
  };

  const enteredNameisValid = enteredName.trim() !== '';
  const enteredEmailisValid =
    enteredEmail.trim() !== '' && ValidateEmail(enteredEmail);
  const nameInputIsInvalid = !enteredNameisValid && inputIsTouched;
  const emailInputIsInvalid = !enteredEmailisValid && inputIsTouched;

  useEffect(() => {
    if (enteredNameisValid && enteredEmailisValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameisValid, enteredEmailisValid]);

  //email validation

  // every key stroke
  const changeNameHandler = e => {
    setEnteredName(e.target.value);
  };
  const changeEmailHandler = e => {
    setEnteredEmail(e.target.value);
  };

  // when lost focus
  const nameInputBlurHandler = e => {
    setInputIsTouched(true);
  };
  const emailInputBlurHandler = e => {
    setInputIsTouched(true);
  };

  // on submit
  const submitHandler = e => {
    e.preventDefault();
    setInputIsTouched(true);

    if (!enteredNameisValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setInputIsTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={changeNameHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          // ref={refName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name field cannot be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input
          type='text'
          id='email'
          onChange={changeEmailHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
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
