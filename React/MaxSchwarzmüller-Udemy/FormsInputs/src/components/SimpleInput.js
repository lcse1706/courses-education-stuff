import { useState, useEffect } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  // const [enteredNameisValid, setEnteredNameValid] = useState(false);
  // const refName = useRef();

  const enteredNameisValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameisValid && inputIsTouched;

  useEffect(() => {
    if (enteredNameisValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameisValid]);

  const changeNameHandler = e => {
    setEnteredName(e.target.value);

    // every key stroke

    // if (e.target.value.trim() !== '') {
    //   setEnteredNameValid(true);
    // }
  };

  // when lost focus

  const nameInputBlurHandler = e => {
    setInputIsTouched(true);
    // if (enteredName.trim() === '') {
    //   setEnteredNameValid(false);
    // }
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
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
