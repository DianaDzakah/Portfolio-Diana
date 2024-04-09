import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Typewriter from "../../components/typewriter";
import email from "../../assets/email.png";
import whatsapp from "../../assets/whatsapp.png";
import styles from "./index.module.css";

const Contact = () => {
	return (
		<>
			<Navbar />
			<div className={styles.body}>
				<div>
					<Typewriter text="Contact Me" speed={500} />
				</div>
				<div className={styles.sub}>
					<p className={styles.actionCall}>
						Revolutionize your online presence with expert web development
						<br />
						<span className={styles.span}>
							Contact me today and let's build something extraordinary together
						</span>
					</p>
					<div className={styles.flexBox}>
						<img className={styles.email} src={email} alt="img" />
						<p>Email: dianadzakah1@gmail.com</p>
					</div>
          <div className={styles.flexBox}>
          <img className={styles.whatsapp} src={whatsapp} alt="img" />
					<p>Contact:0552231994</p>
          </div>
          
					<a className={styles.anchor} href="https://github.com/DianaDzakah?tab=repositories">GitHub</a>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Contact;
