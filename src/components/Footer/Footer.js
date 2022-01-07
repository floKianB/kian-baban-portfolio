import React, { Component } from 'react';

import styles from "./Footer.module.css";

import phone from "../../picSource/phone.png";
import email from "../../picSource/email.png";


class Footer extends Component {
    render() {
        return (
            <>
            <div className={styles.centerer}>
                <div className = {styles.textContainer}>
                    <div className={styles.container}>
                        <img src={phone} alt='phone' className={styles.icons}/>
                        <p className = {styles.text} id = {styles.phone}>+1 (437)991-8664</p>
                    </div>
                    <div className={styles.container}>
                        <img src={email} alt='email' className={styles.icons}/>
                        <p className = {styles.text}>kianbaban@yahoo.com</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Footer;