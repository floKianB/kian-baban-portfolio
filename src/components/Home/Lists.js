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
        setDescription(`In ICS3U I intrested to the world of programming and codding by basics of Java power of creation 
        and also solving real-life problems feels absolutly awsome to me; and know as a programmer in CCC senior group contest I 
        will proudly use this powerfull language to solve problems.`);
        setShow(true);
    }
    const changeDataBB = () => {
        setWhich("basket Ball");
        setImage(basketBall);
        setDescription(`Before immigrating to Canada, I was a basketball player in U-18 top leauge back in Iran. As a Capitan of 
        reajon 6 school board of Tehran, I can annouce that our team got the first team in reagon title and second in Iran competions.
        I would like to continue working on my skills and play in university contest in future.`);
        setShow(true);
    }
    const changeDataFrontEnd = () => {
        setWhich("Front End");
        setImage(frontEnd);
        setDescription(`Summer before my 12 grade was the time for working on my programming skills and exploring this new passion that I found;
        so start with HTML & CSS and Java script and in 4 months I was ready to start the most recent popular framework of Java script, React js. 
        and now I am an updated Junior front-end developer who is ready to work and also educated academicly.
        `);
        setShow(true);
    }
    const changeDataMovie = () => {
        setWhich("Movie");
        setImage(movie);
        setDescription(`TJG4U(movie making course) that I had in grade 12 first semester proved me that I can use my sport leadership
        aspect of my personality and use to develope a team and control a project; better than anyone else. I learned how to work with 
        Final cut pro and also many proffesional Photography and movie making equipments, which I will use to creating context related 
        to programming in grade 12's second semester`);
        setShow(true);
    }
    const changeDataGuitar = () => {
        setWhich("Guitar");
        setImage(guitar);
        setDescription(`I have been play guitar for around 10 years now; and as a mid-level flamnco guitarist I have attended many conserts 
        and resitals. I bleive that my UI & UX design passion is came from the artistic part of my personality. One of the most valueable 
        skills that i learn was communicating with other teammates (mostly very older than me) and support and help eachother to achiving greater
        perpuses.`);
        setShow(true);
    }
    const changeDataKali = () => {
        setWhich("Cybersecurity");
        setImage(kali);
        setDescription("One of my great acade");
        setShow(true);
    }
    const changeDataTech = () => {
        setWhich("Technology");
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
                    <img className={styles.eachCart} src={kali} alt="cybersecurity" onClick={changeDataKali}/>
                    <img className={styles.eachCart} src={movie} alt="movie" onClick={changeDataMovie}/>
                    <img className={styles.eachCart} src={workExperience} alt="workExperience" onClick={changeDataWX}/>
                    <img className={styles.eachCart} src={guitar} alt="guitar" onClick={changeDataGuitar}/>
                    <img className={styles.eachCart} src={tech} alt="tech" onClick={changeDataTech}/>
                    <img className={styles.eachCart} src={flutter} alt="flutter" onClick={changeDataFlutter}/>
                </div>
            </div>

        </>
    )
}

export default Lists
