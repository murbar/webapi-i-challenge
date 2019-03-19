import React from 'react';
import useForm from '../hooks/useForm';

const UserForm = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={values.name || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="bio"
        placeholder="Bio"
        value={values.bio || ''}
        onChange={handleChange}
      />
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
