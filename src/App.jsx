import React, { useState } from 'react';
import ProfileCard from './Components/ProfileCard';
import SwipeButtons from './Components/SwipeButtons';

const App = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const users = [

      {img:'https://images.unsplash.com/photo-1603775020644-eb8decd79994?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'harshita'},
      {img:'https://images.unsplash.com/photo-1607332897173-885f1b27e7a3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'harshi'},
      {img:'https://images.unsplash.com/photo-1616926885190-52dbe533292f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'harshika'},
      {img:'https://images.unsplash.com/photo-1611756468499-e9a38034e3c2?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'hiroshima' },
      {img:'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'harshima'},
      {img:'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'hitesh'},
      {img:'https://images.unsplash.com/photo-1615805159543-043d26ec1080?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'satrika' },
      {img:'https://images.unsplash.com/photo-1625376212522-78872a686380?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'ishika'},
      {img:'https://images.unsplash.com/photo-1628246509092-328fd75179db?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'yogita'},
      {img:'https://images.unsplash.com/photo-1636882336692-8e22b200fecc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'muscan'},
      {img:'https://images.unsplash.com/photo-1634559696616-d1aa6fec0b34?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'anubhuti'},
      {img:'https://images.unsplash.com/photo-1637059490586-9f1197ba4f61?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'harshist'},
      {img:'https://images.unsplash.com/photo-1634559696789-a37e2a0b7d6e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'deepika' },
      {img:'https://images.unsplash.com/photo-1626507208038-ba4763fb5765?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'deepti'},
  ];

  const handleSwipeLeft = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  const handleSwipeRight = () => {
    setCurrentProfileIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="app h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Bumble Clone</h1>
      <div className="card-container">
        <ProfileCard user={users[currentProfileIndex]} />
      </div>
      <SwipeButtons onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight} />
    </div>
  );
};

export default App;
