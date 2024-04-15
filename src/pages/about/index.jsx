import React from 'react'
import diana from "../../assets/diana.jpg"
import styles from "./index.module.css"

const About = () => {
  return (
    <>
    <section className={styles.body1}>
    <nav className={styles.navbar}>
    <a className={styles.port}>portfolio</a>
    </nav>
    <div className={styles.About}>
    <p className={styles.intro}>Hey I'm Diana Dzakah</p>
    <p className={styles.des}>A Tech Enthusiast, lifelong learner and<br/> emerging life adventurer.</p>
    <img className={styles.image} src={diana} alt='img'/>
    <p className={styles.title}>Here’s My Story</p>
    <p className={styles.story}>I'd like to think of it this way, i found love in the most unusual way and place.I originally studied education in the University of Cape Coast graduated with flying colurs.I look forward to what the future holds for i and my love and oops i mean Tech.</p>
    </div>
    </section>
    
    </>
  )
}

export default About