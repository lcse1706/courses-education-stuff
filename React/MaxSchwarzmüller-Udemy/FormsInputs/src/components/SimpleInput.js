import { useRef, useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameisValid, setEnteredNameValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const refName = useRef();

  const changeNameHandler = e => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== '') {
      setEnteredNameValid(true);
    }
  };

  const nameInputBlurHandler = e => {
    setInputIsTouched(true);
    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    setInputIsTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }
    console.log(enteredName);
    console.log(refName.current.value);
  };

  const nameInputIsInvalid = !enteredNameisValid && inputIsTouched;

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
          ref={refName}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name field cannot be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
