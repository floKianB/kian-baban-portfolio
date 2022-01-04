import React from 'react';

import styles from "./ContactUs.module.css";
import image from "../../picSource/mail.jpeg"

const ContactUs = ({setPageName}) => {
    const pageName = "Contact Me"
    setPageName(pageName);

        return (
            <>
            <div className={styles.centerizer}>
                <img src={image} alt="mail"/>
                <form action="https://formsubmit.co/kianbaban@yahoo.com" method="POST">
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
            </>
        );
}

export default ContactUs;