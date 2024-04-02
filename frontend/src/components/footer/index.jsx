import React from 'react'
import styles from "./index.module.css"
import github from "../../assets/github.png"

const Footer = () => {
  return (
    <>
    <hr className={styles.hr}/>
    <footer className={styles.footer}>
    <div>Phone<br/>0552231994</div>
    <div>Email<br/>dianadzakah1@gmail.com</div>
    <div>Follow Me<br/><img className={styles.image} src={github} alt='github'></img></div>
    <div>© 2024 By Diana Dzakah</div>

    </footer>
    
    </>
  )
}

export default Footer