import React from "react";

import styles from "./navBar.module.css";
import Logo from "../../picSource/Logo.png";
import { Link } from "react-router-dom";

const Nav = ({pageName}) => { 
        return(
            <>
            <nav>
                <div className={styles.navigationBar}>
                    <div className = {styles.leftContainer}>
                        <p className= {styles.name} ><spam className={styles.flo}>Flo</spam>Kian</p>
                    </div>
                    <div className = {styles.middleContainer}>
                    <ul className = {styles.list}>
                        <li><Link className={pageName === "Kian Baban" ? styles.onPage : styles.usual} to="/"> Home</Link></li>
                        <li><Link className={pageName === "Portfolio" ? styles.onPage : styles.usual} to="/Portfolio">Portfolio</Link></li>
                        <li><Link className={pageName === "Projects" ? styles.onPage : styles.usual} to="/Projects">Projects</Link></li>
                        <li><Link className={pageName === "Contact Me" ? styles.onPage : styles.usual} to="/ContactUs">Contact Me</Link></li>
                    </ul>
                    </div>
                    <div className={styles.rightContainer}>
                    <img className = {styles.KB} src={Logo} alt = "logo"/>
                    </div>
                </div>
            </nav>
                <div className={styles.NavMin}> 
                    <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/26e07f/external-menu-multimedia-kiranshastry-solid-kiranshastry.png" alt="menue" className={styles.menu}/>
                    <p className= {styles.nameMin} ><spam className={styles.flo}>Flo</spam>Kian</p>
                    <img className = {styles.KB} src={Logo} alt = "logo"/>
                </div>
            </>
        )
}
export default Nav;