import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          {u.name}, {u.bio}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
