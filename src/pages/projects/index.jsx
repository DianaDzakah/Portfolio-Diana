import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from "./index.module.css"

const Projects = () => {
  return (
    <>
    <Navbar/>
    <div className={styles.body}>
    <div className={styles.container}>
    <h1>My Projects</h1>
    <div className={styles.projects}>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/400x200" alt="Project 1" className={styles.projectImg}/>
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>Project 1</h2>
          <p className={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/400x200" alt="Project 2" className={styles.projectImg}/>
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>Project 2</h2>
          <p className={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/400x200" alt="Project 3" className={styles.projectImg}/>
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>Project 3</h2>
          <p className={styles.projectDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className={styles.projectCard}>
        <img src="https://via.placeholder.com/400x200" alt="Project 4" className={styles.projectImg}/>
        <div className={styles.projectInfo}>
          <h2 className={styles.projectTitle}>Project 4</h2>
          <p className={styles.projectDescription}>My  personal portfolio detailing my intersts ,projects,resume and how you can contact me.</p>
        </div>
      </div>
    </div>
  </div>
    </div>
   
    
    <Footer/>
    
    </>
  )
}

export default Projects;