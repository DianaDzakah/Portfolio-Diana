import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import portfolio from "../../assets/portfolio.jpeg"
import Button from '../../components/button';
import styles from "./index.module.css"
const About = () => {
  return (
    <>
      <Navbar />

      <div className={styles.about}>
        <div>
          <img className={styles.image} src={portfolio} alt='img' />
        </div>
        <div className={styles.subbody}>
          <div className={styles.body}>
            <h1 className={styles.hello}>Hello</h1>
            <h3 className={styles.h3}>A Bit About Me</h3>
            <p>I am a passionate tech enthusiast and dedicated educationist, driven by a fervent curiosity for innovation and a commitment to empowering others through knowledge. With a keen interest in leveraging technology to enhance learning experiences, I strive to bridge the gap between technology and education, fostering a dynamic and inclusive learning environment for all.
            </p>
          </div>
          <div className={styles.button}><Button /></div>
        </div>

      </div>

      <div><Footer /></div>
    </>
  );
}

export default About;
