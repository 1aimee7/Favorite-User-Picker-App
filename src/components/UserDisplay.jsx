import React, { useContext } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useContext(FavoriteUserContext);

  const clearFavoriteUser = () => {
    setFavoriteUser(null);
  };

  return (
    <div className="mb-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-indigo-100">
      {favoriteUser ? (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-indigo-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
              {favoriteUser.name.charAt(0)}
            </div>
            <div>
              <p className="text-lg font-medium text-indigo-800">
                Your favorite user is <span className="font-bold">{favoriteUser.name}</span>
              </p>
              <p className="text-sm text-indigo-600">{favoriteUser.email}</p>
            </div>
          </div>
          <button 
            onClick={clearFavoriteUser}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Clear Favorite
          </button>
        </div>
      ) : (
        <p className="text-center text-gray-500 italic">No favorite user selected</p>
      )}
    </div>
  );
};

export default UserDisplay;