import React from 'react';
import styles from "./index.module.css";
const Projects = () => {
  return (
    <>
      <section className={styles.body3}>
        <div className={styles.card}>
          <img src="https://via.placeholder.com/200x120" alt="Image"/>
          <div className={styles.cardContent}>
            <h2>Project 1</h2>
            <p>Ziibo is a movie straming app </p>
          </div>
        </div>
        
        <div className={styles.card}>
          <img src="https://via.placeholder.com/200x120" alt="Image"/>
          <div className={styles.cardContent}>
            <h2>Project 2</h2>
            <p>Marabfoods is an ecommerce site for selling agro products.</p>
          </div>
        </div>
        
        <div className={styles.card}>
          <img src="https://via.placeholder.com/200x120" alt="Image"/>
          <div className={styles.cardContent}>
            <h2>project 3</h2>
            <p>This is a group portfolio site </p>
          </div>
        </div>
        
        <div className={styles.card}>
          <img src="https://via.placeholder.com/200x120" alt="Image"/>
          <div className={styles.cardContent}>
            <h2>Project 4</h2>
            <p>This is a personal portfolio website.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
