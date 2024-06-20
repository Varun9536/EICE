import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Rottexttt = ({ divs, interval }) => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setIsFadeOut(true);
      setTimeout(() => {
        setCurrentDivIndex((prevIndex) => (prevIndex + 1) % divs.length);
        setIsFadeOut(false);
      }, 600);
    }, interval);

    return () => clearInterval(wordChangeInterval);
  }, [divs, interval]);

  return (
    <div
      className={`text-[#01b0f1] ${isFadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.2s ease-in-out' }}
    >
        
        {divs[currentDivIndex]}
        
    </div>
  );
};

export default Rottexttt;

Rottexttt.propTypes = {
  divs: PropTypes.arrayOf(PropTypes.element).isRequired,
  interval: PropTypes.number.isRequired,
};
