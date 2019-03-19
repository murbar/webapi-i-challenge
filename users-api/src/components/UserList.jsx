import React from 'react';
import useToggle from '../hooks/useToggle';

const UserListItem = ({ user, handleDelete }) => {
  const [isHidden, toggleIsHidden] = useToggle();
  const className = `users-list-item${isHidden ? ' hidden' : ''}`;
  return (
    <div className={className}>
      {user.name}
      <div className="bio">{user.bio}</div>
      <button
        className="delete"
        onClick={() => {
          toggleIsHidden();
          setTimeout(() => {
            handleDelete(user.id);
          }, 200);
        }}
      >
        X
      </button>
    </div>
  );
};

const UserList = ({ users, handleDelete }) => {
  return (
    <div className="users-list">
      {users.map(u => (
        <UserListItem user={u} handleDelete={handleDelete} key={u.id} />
      ))}
    </div>
  );
};

export default UserList;
