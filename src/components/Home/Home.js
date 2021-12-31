import React, {useState} from 'react';

import List from "./Lists";
import Info from "./Info";
import styles from "./home.module.css";


const Cards = ({setPageName}) => {
    const pageName = "Kian Baban";
    setPageName(pageName);
    const [which, setWhich] = useState("initialState");
    const [description, setDescription] = useState("initialState");
    const [image, setImage] = useState("initialState");

    const [show, setShow] = useState(false);
        return (
            <>
                <div className={show===true?styles.noshow:styles.show}>
                    <div className={styles.centerizer}>
                        <List setWhich={setWhich} setShow={setShow} setDescription={setDescription} setImage={setImage}/>
                    </div>
                </div>
                <div className={show===true?styles.showInfo:styles.noshowInfo}>
                    {show === true ? <Info which={which} setShow={setShow} description={description} imageSource={image}/> : null}
                </div>
            </>
    );
}

export default Cards;