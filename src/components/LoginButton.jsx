import React from 'react';
import { useState } from 'react';
import { signIn, auth } from '../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LoginButton = () => {
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');

  const updateUserData = user => {
    setName(user?.displayName);
    setProfilePic(user?.photoURL);
  };

  onAuthStateChanged(auth, user => updateUserData(user));

  return (
    <>
      {name ? (
        <div className="flex items-center gap-1">
          <img
            className="rounded-full w-9 h-9"
            src={profilePic}
            alt=""
            referrerPolicy="no-referrer"
          />
          <h2 className="text-lg text-gray-800 dark:text-white">{name}</h2>
        </div>
      ) : (
        <button
          className="px-6 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          onClick={signIn}
        >
          Login/Register
        </button>
      )}
    </>
  );
};

export default LoginButton;