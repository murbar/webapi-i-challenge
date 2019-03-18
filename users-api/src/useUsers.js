import { useState, useEffect } from 'react';
import axios from 'axios';

const useUsers = () => {
  const [state, setState] = useState([]);

  useEffect(() => {}, []);

  const getAll = () => {};

  const get = userId => {};

  const add = user => {};

  const update = user => {};

  const remove = userId => {};

  return {
    state,
    setState,
    getAll,
    get,
    add,
    update,
    remove
  };
};

export default useUsers;
