import React, { useEffect, useState } from 'react';
import AddUserForm from './AddUserForm';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.log('Data is not an array:', data);
          setUsers([]);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
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
      <AddUserForm refreshUsers={fetchUsers} />
    </div>
  );
};

export default UserList;
