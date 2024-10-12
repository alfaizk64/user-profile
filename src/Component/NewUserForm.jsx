import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

const NewUserForm = () => {
  const { addUser } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (!name || !email) {
      setError('Name and Email are required');
      return;
    }
    addUser(formData);
    setFormData({ name: '', email: '', bio: '', profilePicture: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="new-user-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        placeholder="Bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <input
        type="url"
        name="profilePicture"
        placeholder="Profile Picture URL"
        value={formData.profilePicture}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Add User</button>
    </form>
  );
};

export default NewUserForm;
