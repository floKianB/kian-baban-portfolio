import React from 'react';

import styles from './Projects.module.css';
import mac from "../../picSource/macbook.png";
import imac from "../../picSource/Imac.png";
import iphone from "../../picSource/iphone.png";
import github from "../../picSource/github.png";


const Projects = ({setPageName}) => {
    const pageName = "Projects"
    setPageName(pageName);
    return (
        <>
        <div className={styles.centerizer}>
            <div className={styles.macContainer}>
                <div>
                    <img src={mac} alt='mac' className={styles.mac}/>
                </div>
                <div className={styles.macDescription}>
                    <p className={styles.macName}>Flo-Crypto</p>
                    <br/>
                    <p>These days worthiness of cryptocurrencies is undeniable so this Web Application will get data from
                        <a href='https://www.coingecko.com/en?__cf_chl_jschl_tk__=ESY3_8g41YZ_q5MEBsCP8RTZBcWkyMac.YvMkrrFZqk-1640861559-0-gaNycGzNCL0' class={styles.nameSite} target="_blank" rel='noreferrer' > Coingecko </a>
                        API to acknowledge our users of the current price, price changes, and market capacity. According to React js documentation, React js is famous for simplification 
                        reusable components. This project will qualify the previous statement by storing API's data in one Component named <a class={styles.nameSite} target="_blank" rel='noreferrer' href='https://github.com/floKianB/Flo-Crypto/blob/main/src/Coin.js'> Coin.js </a>
                        and reusing that component as much data as we can get which will increase the connection between back-end & front-end of our website.</p>
                        <div className={styles.linkCenterer}>
                            <a href='https://flo-crypto.netlify.app/' target="_blank" rel='noreferrer'><div className={styles.linkToSite}>Flo-Crypto</div></a>
                            <a href='https://github.com/floKianB/Flo-Crypto' target="_blank" rel='noreferrer'><img className={styles.codeIcon} src={github} alt="code link"/></a>
                        </div>
                        <br/>

                </div>
            </div>

                <div className={styles.iphoneContainer}>
                    <div className={styles.phoneDescription}>
                        <h2 className={styles.iphoneName}>Flo-Weather</h2>
                        <br/>
                        <p>
                            Weather App is built just by HTML, CSS & Vanilla JavaScript. It contains a beautiful loader and
                            error handlers, which provide the user with a great UX performance that combines with Js's DOM to
                            build this simple UI design. working with 
                            <a class={styles.nameSite} target="_blank" rel='noreferrer' href='https://www.meteomatics.com/en/weather-api/?gclid=CjwKCAiAzrWOBhBjEiwAq85QZ1xeiaiEOnYJHy-O6nm3d-_4sx-mEFJUeos4sBqd_Sty0ZPVevwsMxoCskoQAvD_BwE'> Meteomatics </a> APIs. <br/>
                            I have a plan to develop this web application, in mid-March. I would like to add extra analysis 
                            on whether and display more details by Chart. Js library to visualized those changes. 
                        </p>
                        <div className={styles.linkCenterer}>
                            <a href='https://flo-weather.netlify.app/' target="_blank" rel='noreferrer'><div className={styles.linkToSite}>Flo-Weather</div></a>
                            <a href='https://github.com/floKianB/WeatherApp-API' target="_blank" rel='noreferrer'><img className={styles.codeIcon} src={github} alt="code link"/></a>
                        </div>
                        <br/>
                    </div>
                    <div>
                        <img src={iphone} alt='iphone' className={styles.iphone}/>
                    </div>
                </div>


                <div className={styles.imacContainer}>
                    <div>
                        <img src={imac} alt='imac' className={styles.imac}/>
                    </div>
                    <div className={styles.imacDescription}>
                        <p className={styles.macName}>Flo-Swift</p>
                        <br/>
                        <p>
                        Flo-Swift was my first experience of building a game or better to say competition web application (like <a class={styles.nameSite} href='https://type.biz/' target="_blank" rel='noreferrer' >type.biz</a>); 
                        however, In my point of view, I think that I could use some other libraries to improve the useability of my web app. I will 
                        update this game (challenge) website after this school year(We will experience building games in ICS4U, so I want to combine my 
                        knowledge with dose units of game development).
                        </p>
                            <div className={styles.imaclinkCenterer}>
                                <a href='https://github.com/floKianB/Flo-Crypto' target="_blank" rel='noreferrer'><img className={styles.codeIcon} src={github} alt="code link"/></a>
                            </div>
                            <br/>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Projects;