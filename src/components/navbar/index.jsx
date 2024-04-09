import React from 'react'
import styles from "./index.module.css"


const Navbar = () => {
  return (
    <>
    <nav className={styles.nav}>
    <div className={styles.subnav}>
    <h3 className={styles.name}>Diana Dzakah</h3>
    <p className={styles.description}>web developer</p>
    </div>
    <div>
    <ul className={styles.list}>
    <li className={styles.listid}>Resume</li>
    <li className={styles.listid}>Projects</li>
    <li className={styles.listid}>Contact</li>
    </ul>
    </div>
    </nav>
   
    

    </>
  )
}

export default Navbar