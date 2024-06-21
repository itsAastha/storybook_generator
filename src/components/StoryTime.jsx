// components/StoryTime.jsx

import React from 'react';

const StoryTime = ({ story }) => {
  return (
    <div className="mt-6 bg-yellow-100 rounded-lg p-6 shadow-md">
      <div className="text-2xl text-pink-600 font-bold mb-4">
        Story Time!
      </div>
      <div className="text-lg leading-8 text-gray-800 font-medium">
        {story}
      </div>
    </div>
  );
}

export default StoryTime;
