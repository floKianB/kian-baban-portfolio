import React from 'react';

import styles from "./ContactUs.module.css";

const ContactUs = ({setPageName}) => {
    const pageName = "Contact Me"
    setPageName(pageName);

        return (
            <>
            <div className={styles.center}>
            <div className={styles.centerizer}>
                {/* <img src={image} alt="mail"/> */}
                <img src="https://img.icons8.com/external-justicon-flat-justicon/256/000000/external-email-notifications-justicon-flat-justicon.png" className={styles.mail} alt='mail'/>
                <form action="https://formsubmit.co/kianbaban@yahoo.com" method="POST" target='_blanck'>
                    <h2 className={styles.labelEmailMe}>Email-Me</h2>
                    <input className={styles.inputMailName} type="text" name="name" placeholder='Name'/>
                    <div className={styles.package}>
                        <input className={styles.inputMailEach} type="text" name="_subject" placeholder='Subject'/>
                        <input className={styles.inputMailEach} type="email" name="email" placeholder='Email' required/>
                    </div>
                    <input className={styles.inputMailText} type="text" name="text" placeholder='Message' required/>
                        <button className={styles.sendBtn} type="submit">Send</button>
                        <input type="hidden" name="_captcha" value="false"/>
                </form>
            </div>
            </div>
            </>
        );
}

export default ContactUs;