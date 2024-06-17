import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Rottext = ({ words, interval }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isFadeOut, setIsFadeOut] = useState(false);
  
    useEffect(() => {
      const wordChangeInterval = setInterval(() => {
        setIsFadeOut(true);
        setTimeout(() => {
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setIsFadeOut(false);
        }, 600);
      }, interval);
  
      return () => clearInterval(wordChangeInterval);
    }, [words, interval]);

  return (
    <span 
    className={`text-[#01b0f1] ${isFadeOut ? 'opacity-0' : 'opacity-100'}`}
    style={{ transition: 'opacity 0.2s ease-in-out' 
    }}>
        {words[currentWordIndex]}
    </span>
  );
};

export default Rottext;

Rottext.propTypes = {
    words: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number.isRequired,
  };