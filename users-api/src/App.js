import React from 'react';
import useUsers from './useUsers';
import UserList from './UserList';
import './App.css';

const App = () => {
  const { users, isLoading, error, addUser, updateUser, removeUser } = useUsers();

  return (
    <div className="App">
      <h1>Users API demo</h1>
      {isLoading && (
        <div className="loading">
          <img src="/loading.svg" alt="Loading..." />
        </div>
      )}
      {error && <div className="error">{error}</div>}
      {users.length ? <UserList users={users} /> : <div>No users</div>}
    </div>
  );
};

export default App;
