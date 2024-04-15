import React from 'react'
import styles from "./index.module.css"
const Resume = () => {
  return (
    <>
    <section className={styles.resume}>
    <div className={styles.socials}>
    <a href='https://www.linkedin.com/in/diana-dzakah-a634442bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgV2blcD9SDyp0v9YbOUciA%3D%3D' className={styles.linkedin}>LinkedIn</a>
    <a href="https://github.com/DianaDzakah"className={styles.GitHub}>GitHub</a>
    <a className={styles.resume} href='https://docs.google.com/document/d/1O8i4UGMHEZzurA0FFuek91NLu3Tp3u1k6_zNB7ImBg0/edit' >Resume</a>
    </div>

    </section>
   
    </>
  )
}

export default Resume