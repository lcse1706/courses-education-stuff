import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';

function App() {
  // const state = {
  //   expression: 'empty',
  // };

  const [expression, setExpression] = useState('Default Value');

  const displayValue = expression => {
    console.log('Getting from Name.js');
    setExpression(expression);
  };

  return (
    <div>
      <Name displayValue={displayValue} />
      <h1>{expression}</h1>
      {/* <Age /> */}
      {/* <Display /> */}
    </div>
  );
}
export default App;
