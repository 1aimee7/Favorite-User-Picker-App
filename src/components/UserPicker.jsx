import React, { useContext, useState, useEffect } from 'react';
import { FavoriteUserContext } from './FavoriteUserContext';

const UserPicker = () => {
  const { setFavoriteUser, favoriteUser } = useContext(FavoriteUserContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to load users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
    
  const handleUserClick = (user) => {
    setFavoriteUser({ name: user.name, email: user.email });
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-indigo-600 font-medium text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md border border-red-200 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Pick your favorite user</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {users.map((user) => {
          const isSelected = favoriteUser && favoriteUser.email === user.email;
          return (
            <li
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-200 flex items-center ${
                isSelected 
                ? 'bg-indigo-100 border-2 border-indigo-500 shadow-md' 
                : 'bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                isSelected ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}>
                {user.name.charAt(0)}
              </div>
              <div>
                <p className={`font-medium ${isSelected ? 'text-indigo-700' : 'text-gray-800'}`}>
                  {user.name}
                </p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              {isSelected && (
                <span className="ml-auto">
                  <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPicker;