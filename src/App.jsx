import React from 'react';
import Profile from './Component/Profile';
import ThemeToggle from './Component/ThemeToggle';
import NewUserForm from './Component/NewUserForm';
import { useUser } from './context/UserContext';
import { UserProvider } from './context/UserContext';
import './App.css';

function AppWrapper() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

function App() {
  const { theme } = useUser(); // Access theme from UserContext

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle />
      <NewUserForm />
      <Profile />
    </div>
  );
}

export default AppWrapper;
