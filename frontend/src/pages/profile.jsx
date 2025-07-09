import React from 'react';

import Sidebar from '../partial/sidebar';
import Header from '../partial/header';

const Profile = () => {
  return (
    <div className="flex h-screen bg-gray-700 font-sans">
      <Sidebar/>
            {/* Area Konten */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* Header */}
                <Header />
            </div>
    </div>
  );
};

export default Profile;