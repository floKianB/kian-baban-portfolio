import React from 'react'

import one from "../../../picSource/linkedIn-pics/one.png";
import two from "../../../picSource/linkedIn-pics/two.png";
import three from "../../../picSource/linkedIn-pics/three.png";
import four from "../../../picSource/linkedIn-pics/four.png";
import five from "../../../picSource/linkedIn-pics/five.png";
import six from "../../../picSource/linkedIn-pics/six.png";
import seven from "../../../picSource/linkedIn-pics/seven.png";

import styles from "./slider.module.css";


function Pics() {
    return (
        <>
            <img className={styles.each} src={two} alt="two"/>
            <img className={styles.each} src={one} alt="one"/>
            <img className={styles.each} src={three} alt="three"/>
            <img className={styles.each} src={four} alt="four"/>
            <img className={styles.each} src={five} alt="five"/>
            <img className={styles.each} src={six} alt="six"/>
            <img className={styles.each} src={seven} alt="seven"/>
        </>
    )
}

export default Pics;
