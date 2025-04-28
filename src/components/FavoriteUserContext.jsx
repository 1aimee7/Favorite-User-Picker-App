import React, { createContext, useState, useEffect } from 'react';

export const FavoriteUserContext = createContext();

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);
    
  useEffect(() => {
    const storedUser = localStorage.getItem('favoriteUser');
    if (storedUser) {
      try {
        setFavoriteUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing favorite user from localStorage:', error);
      }
    }
  }, []);
    
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem('favoriteUser');
    }
  }, [favoriteUser]);
  
  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};