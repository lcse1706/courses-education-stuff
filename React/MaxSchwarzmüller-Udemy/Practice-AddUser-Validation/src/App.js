import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUsersListHandler = (userName, userAge) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
    console.log('addUsersListHandler');
  };

  return (
    <div>
      <AddUser onAddUser={addUsersListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
