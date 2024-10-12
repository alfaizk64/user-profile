import React, { useRef } from 'react';
import { useUser } from '../context/UserContext';

const ProfilePictureUpload = ({ picture }) => {
  const fileInputRef = useRef();
  const { updateUser } = useUser();

  const handleUpload = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateUser({ profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <img src={picture} alt="Profile" />
      <input type="file" ref={fileInputRef} onChange={handleUpload} />
    </div>
  );
};

export default ProfilePictureUpload;
