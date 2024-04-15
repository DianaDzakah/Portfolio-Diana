import React from 'react'
import diana from "../../assets/diana.jpg"
import styles from "./index.module.css"

const About = () => {
  return (
    <>
    <section className={styles.body1}>
    <nav className={styles.navbar}>
    <a className={styles.port}>portfolio</a>
    <div className={styles.nav}>
    <a>about</a>
    <a>resume</a>
    <a>projects</a>
    <a>contact</a>
    </div>
    </nav>
    <div className={styles.About}>
    <p className={styles.intro}>Hey I'm Diana Dzakah</p>
    <p className={styles.des}>A Tech Enthusiast, lifelong learner and<br/> emerging life adventurer.</p>
    <img className={styles.image} src={diana} alt='img'/>
    </div>

    </section>
    
    </>
  )
}

export default About