import React, { Component } from 'react';

import styles from "./Footer.module.css";

class Footer extends Component {
    render() {
        return (
            <>
                <div className = {styles.textContainer}>
                    <p className = {styles.text}>350431961@gapps.yrdsb.ca</p>
                </div>
                <div className = {styles.phoneConrainer}>
                    <p className = {styles.text} id = {styles.phone}>+989120349044</p>
                </div>
            </>
        );
    }
}

export default Footer;