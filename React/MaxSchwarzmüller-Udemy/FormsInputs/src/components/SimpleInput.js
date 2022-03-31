import { useRef, useState } from 'react';

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState('');
  const refName = useRef();

  const changeNameHandler = e => {
    setEnteredName(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    console.log(enteredName);
    console.log(refName.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={changeNameHandler}
          ref={refName}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
