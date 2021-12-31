import React from 'react';

import styles from "./Lists.module.css";

import movie from "../../picSource/movie.png";
import flutter from "../../picSource/flutter.png";
import workExperience from "../../picSource/ups.png";
import java from "../../picSource/java.png";
import basketBall from "../../picSource/BB.png";
import frontEnd from "../../picSource/FrontEnd.png";
import kali from "../../picSource/security.png";
import guitar from "../../picSource/music.png";
import tech from "../../picSource/tech.png";

function Lists({setWhich, setShow, setDescription, setImage}) {
    const changeDataJava = () => {
        setWhich("Java");
        setImage(java);
        setDescription("I like java");
        setShow(true);
    }
    const changeDataBB = () => {
        setWhich("basket Ball");
        setImage(basketBall);
        setDescription("I like Basket Ball");
        setShow(true);
    }
    const changeDataFrontEnd = () => {
        setWhich("Front End");
        setImage(frontEnd);
        setDescription("I like being Front-End Web developer");
        setShow(true);
    }
    const changeDataMovie = () => {
        setWhich("Movie");
        setImage(movie);
        setDescription("I like Movie");
        setShow(true);
    }
    const changeDataGuitar = () => {
        setWhich("Guitar");
        setImage(guitar);
        setDescription("I like Guitar");
        setShow(true);
    }
    const changeDataKali = () => {
        setWhich("Kali");
        setImage(kali);
        setDescription("I like Hacking");
        setShow(true);
    }
    const changeDataTech = () => {
        setWhich("Tech");
        setImage(tech);
        setDescription("I like Technology");
        setShow(true);
    }
    const changeDataFlutter = () => {
        setWhich("Flutter");
        setImage(flutter);
        setDescription("I like Flutter");
        setShow(true);
    }
    const changeDataWX = () => {
        setWhich("Work Experience");
        setImage(workExperience);
        setDescription("I like WX");
        setShow(true);
    }
    return (
        <>
            <div className={styles.listsContainer}>
                <div className={styles.lists}>
                    <img className={styles.eachCart} src={java} alt="java" onClick={changeDataJava}/>
                    <img className={styles.eachCart} src={basketBall} alt="basketBall" onClick={changeDataBB}/>
                    <img className={styles.eachCart} src={frontEnd} alt="frontEnd" onClick={changeDataFrontEnd}/>
                    <img className={styles.eachCart} src={movie} alt="movie" onClick={changeDataMovie}/>
                    <img className={styles.eachCart} src={guitar} alt="guitar" onClick={changeDataGuitar}/>
                    <img className={styles.eachCart} src={kali} alt="kali" onClick={changeDataKali}/>
                    <img className={styles.eachCart} src={tech} alt="tech" onClick={changeDataTech}/>
                    <img className={styles.eachCart} src={flutter} alt="flutter" onClick={changeDataFlutter}/>
                    <img className={styles.eachCart} src={workExperience} alt="workExperience" onClick={changeDataWX}/>
                </div>
            </div>

        </>
    )
}

export default Lists
