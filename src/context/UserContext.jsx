import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

 export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Software Developer',
      profilePicture: '/default-pic.png',
      changeHistory: [],
    }
  ]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

  const updateUser = (id, updatedData) => {
    setUsers((prevUsers) => 
      prevUsers.map((user) => 
        user.id === id ? { ...user, ...updatedData, changeHistory: [...user.changeHistory, { ...user, updatedAt: new Date().toISOString() }] } : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};


