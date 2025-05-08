import React from 'react';

const Background = () => {
  return (
    <div className="background">
      {[...Array(21)].map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  );
};

export default Background;