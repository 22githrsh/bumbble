import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="profile-card bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-64 object-cover" src={user.img} alt={user.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
        <p className="text-gray-700">{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
