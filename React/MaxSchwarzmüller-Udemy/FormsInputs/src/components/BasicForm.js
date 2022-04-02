import { useState } from 'react';

const BasicForm = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const changeNameHandler = e => {
    setEnteredValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const submitFormHandler = e => {
    e.preventDefault();
    console.log(enteredValue);
    setEnteredValue('');
    setIsTouched(false);
  };

  const inputIsInValid = enteredValue.trim() === '' && isTouched;

  const nameInputClassHandler = inputIsInValid
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
            onChange={changeNameHandler}
            onBlur={blurHandler}
            value={enteredValue}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
