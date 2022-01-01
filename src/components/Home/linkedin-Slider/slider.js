import React, {useState} from 'react';

import styles from "./slider.module.css";
import Picss from "./pics";



function Slider() {
    const [xPos, setXpos] = useState(0);

    const onClick = (direction) => {
        (direction === "left") ? setXpos(x => x + 500) : setXpos(x => x - 500);
        console.log(xPos);
    }

    return (
        <>
        <div className={styles.slider}>
            <button className={styles.left} onClick={() => onClick("left")}><img className={styles.imageBtn} src="https://img.icons8.com/material-outlined/30/000000/left.png" alt='left'/></button>
            <div style={{transform: `translateX(${xPos}px)`}} className={styles.containerSlider}>
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss /> 
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />
                <Picss />              
            </div>
            <button className={styles.right} onClick={() => onClick("right")}><img className={styles.imageBtn} src="https://img.icons8.com/material-outlined/30/000000/right.png" alt='right'/></button>
        </div>
        </>
    )
}

export default Slider;
