import { useState, useEffect } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:4000/api/users';

const userUrl = id => `${endpoint}/${id}`;

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestWrapper = cb => async (...args) => {
    setIsLoading(true);
    setError(null);
    try {
      await cb(...args);
      setIsLoading(false);
    } catch (error) {
      console.dir(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = requestWrapper(async () => {
    const { data } = await axios.get(endpoint);
    setUsers(data);
  });

  // const get = requestWrapper(async userId => {
  //   const { data } = await axios.get(userUrl(userId));
  //   console.log(data);
  //   return data;
  // });

  const addUser = requestWrapper(async user => {
    const { data } = await axios.post(endpoint, user);
    user.id = data.id;
    console.log(data);
    setUsers(prev => [...prev, user]);
  });

  const updateUser = requestWrapper(async user => {});

  const removeUser = requestWrapper(async userId => {
    const { data } = await axios.delete(userUrl(userId));
    console.log(data);
    setUsers(prev => prev.filter(u => u.id !== userId));
  });

  return {
    users,
    isLoading,
    error,
    getAllUsers,
    // get,
    addUser,
    updateUser,
    removeUser
  };
};

export default useUsers;
