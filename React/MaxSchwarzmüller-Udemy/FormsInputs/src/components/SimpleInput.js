import { useRef, useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameisValid, setEnteredNameValid] = useState(true);
  const refName = useRef();

  const changeNameHandler = e => {
    setEnteredName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }

    console.log(enteredName);
    console.log(refName.current.value);
  };

  const nameInputClasses = enteredNameisValid
    ? 'form-control'
    : 'form-control invalid';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={changeNameHandler}
          ref={refName}
        />
        {!enteredNameisValid && (
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
