import React, { useState, useEffect } from 'react';
 import styles from './index.module.css'; 

 const Typewriter = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
  
    useEffect(() => {
      let timer = setTimeout(() => {
        if (displayText.length < text.length) {
          setDisplayText(text.substring(0, displayText.length + 1));
        } else {
          setDisplayText(''); // Reset displayText to start typing again
        }
      }, speed);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, [displayText, text, speed]);
  return (
    <div className={styles.typewriterContainer}>
    <h1 className={styles.typewriterText}>{displayText}</h1>
  </div>
  );
};

export default Typewriter;
