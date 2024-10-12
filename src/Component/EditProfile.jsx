import React, { useState, useCallback } from 'react';
import { useUser } from '../context/UserContext';

const EditProfile = ({ user, onSave }) => {
  const { updateUser } = useUser();
  const [formData, setFormData] = useState(user);
  const [error, setError] = useState('');

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      setError('Name and Email are required');
      return;
    }
    updateUser(user.id, formData);
    onSave();
  };

  return (
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default EditProfile;
