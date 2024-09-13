import React, { useState } from 'react';

const AddUserForm = ({ refreshUsers }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [age, setAge] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, gender, age: parseInt(age) }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('User added:', data);
        refreshUsers();
        setName('');
        setGender('Male');
        setAge('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Gender: </label>
        <select
          id="gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="Male">Man</option>
          <option value="Female">Woman</option>
        </select>
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
