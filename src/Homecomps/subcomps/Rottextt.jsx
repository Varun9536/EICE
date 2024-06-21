import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Rottextt = ({ divs, interval }) => {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);

  const clickright= () =>
  {
    setIsFadeOut(true)
  }

  useEffect(() => {
    const wordChangeInterval = setInterval(() => {
      setIsFadeOut(true);
      setTimeout(() => {
        setCurrentDivIndex((prevIndex) => (prevIndex + 1) % divs.length);
        setIsFadeOut(false);
      }, 600);
    }, interval);

    return () => clearInterval(wordChangeInterval);
  }, [divs, isFadeOut, interval]);

  return (
    <div
      className={`text-[#01b0f1] ${isFadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{ transition: 'opacity 0.2s ease-in-out' }}
    >
      {divs[currentDivIndex]} 
      {/* <submit onClick={clickright} className='cursor-pointer border-2 border-bloo text-xs'>move right</submit> */}
    </div>
  );
};

export default Rottextt;

Rottextt.propTypes = {
  divs: PropTypes.arrayOf(PropTypes.element).isRequired,
  interval: PropTypes.number.isRequired,
};
