import React from 'react';

const UserList = ({ users, handleDelete }) => {
  return (
    <div className="users-list">
      {users.map(u => (
        <div className="users-list-item" key={u.id}>
          {u.name}
          <div className="bio">{u.bio}</div>
          <button className="delete" onClick={() => handleDelete(u.id)}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
