import React from 'react';

import BannerPic from "../../picSource/B.jpg";
import styles from "../Banner/Banner.module.css";
import KB from "../../picSource/KB.png";

const Banner = ({pageName}) => {
        return (
            <>
                <div className = {styles.bannerContainer}>
                    <h1 className={styles.pageName}>{pageName}</h1>    
                    <img className = {styles.banner} src={BannerPic} alt = "Banner"/>
                    <img className = {styles.logo} src={KB} alt = "logo"/>
                </div>
            </>
        );
}

export default Banner;