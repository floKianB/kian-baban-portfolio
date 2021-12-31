import React from 'react';

import cross from "../../picSource/cross.png";
import styles from "./Info.module.css";


function Info({which, setShow, description, imageSource}) {
    const close = () => {
        setShow(false);
    }
    return (
        <div className={styles.showInfo}>
            <div className={styles.imageLeft}>
                <img src={imageSource} alt="ax" className={styles.imageInfo}/>
            </div>
            <div className={styles.textMiddle}>
                <h2 className={styles.title}>{which}</h2>
                <br/>
                <p className={styles.description}>{description}</p>
            </div>
                <img src={cross} alt="cross" className={styles.cross} onClick={close}/>
        </div>
    )
}
export default Info;
