import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Software Developer',
      profilePicture: '/default-pic.png',
      changeHistory: [],
    },
  ]);

  // Theme state: 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }]);
  };

  const updateUser = (id, updatedData) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              ...updatedData,
              changeHistory: [...user.changeHistory, { ...user, updatedAt: new Date().toISOString() }],
            }
          : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, theme, toggleTheme }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
