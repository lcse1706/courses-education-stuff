import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.log('Data is not an array:', data);
          setUsers([]); // Ustawienie pustej tablicy w przypadku błędu
        }
      })
      .catch(error => console.log(error));
  }, []);

  const deleteUser = id => {
    fetch(`http://localhost:3001/users/${id}`, { method: 'DELETE' }).then(() =>
      setUsers(users.filter(user => user.id !== id))
    );
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map(user => (
          <li key={user.id}>
            {user.name} ({user.gender}, {user.age})
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
