import React from 'react'
import styles from "./index.module.css"

const Button = () => {
  return (
    <>
    <div className={styles.button}>
    <div className={styles.circle}>Resume</div>
    <div className={styles.circl}>Projects</div>
    <div className={styles.circ}>Contact</div>
    </div>
    
    </>
  )
}

export default Button