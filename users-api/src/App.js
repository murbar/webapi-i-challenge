import React from 'react';
import useUsers from './hooks/useUsers';
import UserList from './components/UserList';
import './App.css';
import UserForm from './components/UserForm';

const App = () => {
  const { users, isLoading, error, addUser, removeUser } = useUsers();

  return (
    <div className="App">
      <h1>Users API demo</h1>
      {isLoading && (
        <div className="loading">
          <img src="/loading.svg" alt="Loading..." />
        </div>
      )}
      {error && <div className="error">{error}</div>}
      <UserForm handleAdd={addUser} />
      {users.length ? <UserList users={users} handleDelete={removeUser} /> : <div>No users</div>}
    </div>
  );
};

export default App;
