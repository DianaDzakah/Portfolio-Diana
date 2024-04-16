import React from 'react';
import styles from "./index.module.css"

const Contact = () => {
  return (
    <>
      <section className={styles.contact}>
      <div className={styles.con}>
      <h1>CONTACT ME</h1>
      <p>Contact me for all your Websites needs</p>
      <p>dianadzakah1@gmail.com</p>
      <p>0552231994</p>
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2702325981018!2d-1.7589360258297515!3d4.894361895081476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779fefcbdb79b%3A0x3a6e049c74ee0e9e!2sSSNIT%20House!5e0!3m2!1sen!2sgh!4v1701284658784!5m2!1sen!2sgh" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Google Map" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
      </section>
    </>
  );
}

export default Contact;
