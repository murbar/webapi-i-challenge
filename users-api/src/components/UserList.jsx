import React from 'react';

const UserList = ({ users, handleDelete }) => {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          {u.name}, {u.bio} <button onClick={() => handleDelete(u.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
