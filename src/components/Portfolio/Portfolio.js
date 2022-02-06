import React from 'react';

import styles from "./Portfolio.module.css";
import pdf from "../../picSource/CV.pdf";
import page1 from "../../picSource/page1.png";
import page2 from "../../picSource/page2.png";
import toefl from "../../picSource/toefl.png";
import Row from "./row";


const Portfolio = ({setPageName}) => {
    const pageName = "Portfolio";
    setPageName(pageName);
        return (
            <>
                <div className={styles.CVcontainer}>
                    <div className={styles.socialMediaContainer}>
                        <Row />
                    </div>
                    <img className={styles.pageCV1} src={page1} alt="page1"/>
                    <img className={styles.pageCV2} src={page2} alt="page2"/>
                    <img className={styles.toefl} src={toefl} alt='toeflResult'/>
                    <button className={styles.downloadCV}><a href={pdf} download="Kian Baban's CV" className={styles.downloadLink}>Download CV</a></button>
                </div>

            </>
        );
    }

export default Portfolio;