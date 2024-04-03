import React from 'react';

const SwipeButtons = ({ onSwipeLeft, onSwipeRight }) => {
  return (
    <div className="swipe-buttons flex justify-center space-x-4 mt-8">
      <button onClick={onSwipeLeft} className="swipe-button bg-red-500 text-white px-4 py-2 rounded-lg">
        Left
      </button>
      <button onClick={onSwipeRight} className="swipe-button bg-green-500 text-white px-4 py-2 rounded-lg">
        Right
      </button>
    </div>
  );
};

export default SwipeButtons;
