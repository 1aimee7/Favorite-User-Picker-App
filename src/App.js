import React from 'react';
import { FavoriteUserProvider } from './components/FavoriteUserContext';
import UserPicker from './components/UserPicker';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
            <h1 className="text-3xl font-bold text-white text-center">Favorite User Picker</h1>
          </div>
          <div className="p-6">
            <UserDisplay />
            <UserPicker />
          </div>
        </div>
      </div>
    </FavoriteUserProvider>
  );
}

export default App;