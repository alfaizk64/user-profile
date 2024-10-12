import React, { useState } from 'react';
import EditProfile from './EditProfile';
import ProfilePictureUpload from './ProfilePictureUpload';
import { useUser } from '../context/UserContext';
import '/src/profile.css';

const Profile = () => {
  const { users } = useUser();
  const [isEditing, setIsEditing] = useState(null); // track which profile is being edited

  const toggleEdit = (id) => {
    setIsEditing(isEditing === id ? null : id);
  };

  return (
    <div className="profile-container">
      {users.map((user) => (
        <div key={user.id} className="profile">
          <ProfilePictureUpload picture={user.profilePicture} />
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button onClick={() => toggleEdit(user.id)}>
            {isEditing === user.id ? 'Cancel' : 'Edit'}
          </button>
          {isEditing === user.id && <EditProfile user={user} onSave={() => toggleEdit(user.id)} />}
        </div>
      ))}
    </div>
  );
};

export default Profile;
