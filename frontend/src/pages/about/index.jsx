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
      
      <div>
        <img className={styles.image} src={portfolio} alt='img' />
      </div>
      <div>
        <h1>Hello</h1>
        <h3>A Bit About Me</h3>
        <p>As a teacher and web developer, I thrive in two realms: imparting knowledge in classrooms and crafting digital solutions. With a passion for education, I inspire minds to grow, while my coding skills bring ideas to life on the web. Juggling between lesson plans and code blocks, I find joy in both teaching and coding, each complementing the other. Guiding students to understand complex concepts mirrors the process of debugging code—both require patience and clear communication. Embracing innovation, I integrate technology into education, fostering a dynamic learning environment. Outside the classroom, I dive into web development projects, constantly honing my skills and exploring new technologies. Balancing these dual roles, I find fulfillment in shaping minds and shaping code, leaving a lasting impact in both worlds.
        </p>
      </div>
      <div><Button/></div>
      <div><Footer /></div>
    </>
  );
}

export default About;
