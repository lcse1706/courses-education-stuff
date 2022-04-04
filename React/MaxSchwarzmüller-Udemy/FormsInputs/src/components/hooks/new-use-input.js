import { useState } from 'react';

const useInputHook = validateInput => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const changeInputHandler = e => {
    setEnteredValue(e.target.value);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const inputIsValid = validateInput(enteredValue);
  const inputIsInvalid = !inputIsValid && isTouched;

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    changeInputHandler,
    blurHandler,
    inputIsInvalid,
    inputIsValid,
    reset,
  };
};

export default useInputHook;
