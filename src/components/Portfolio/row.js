import React from 'react';

import styles from "./row.module.css";
import github from "../../picSource/github.png";
import youtube from "../../picSource/youtube.png";
import instagram from "../../picSource/instagram.png";
import facebook from "../../picSource/facebook.png";
import linkedin from "../../picSource/linkedin.png";

const Row = () => {
        return (
            <>
                <div className={styles.row}>
                    <div className = {styles.carts}>
                        <a href='https://github.com/floKianB' target="_blank" rel="noreferrer"><img className={styles.eachCart} src={github} alt="github"/></a>
                        <a href='https://www.youtube.com/channel/UCrEMjgo8VjcXUM9V0VIWRjg' target="_blank" rel="noreferrer"><img className={styles.eachCart} src={youtube} alt="youtube"/></a>
                        <a href='https://www.linkedin.com/in/kian-baban-04507a219/' target="_blank" rel="noreferrer"><img className={styles.eachCart} src={linkedin} alt="linkedin"/></a>
                        <a href='https://www.instagram.com/flo_kian.24/' target="_blank" rel="noreferrer"><img className={styles.eachCart} src={instagram} alt="instagram"/></a>
                        <a href='https://www.facebook.com/kianbaban24/' target="_blank" rel="noreferrer"><img className={styles.eachCart} src={facebook} alt="facebook"/></a>
                    </div>
                </div>
            </>
        );
    }

export default Row;