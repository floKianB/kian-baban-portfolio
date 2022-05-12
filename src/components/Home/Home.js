import React from 'react';

import Slider from "./linkedin-Slider/slider";
import styles from "./home.module.css";

import profilePic from "../../picSource/face.png";
// import uoft from "../../picSource/uoft.png";
import security from "../../picSource/security.png";
import roadmap from "../../picSource/roadMap.png";
import basketball from "../../picSource/BB.png";
import guitar from "../../picSource/music.png";


const Cards = ({setPageName}) => {
    const pageName = "Kian Baban";
    setPageName(pageName);
        return (
            <>
                <div className={styles.centerizer}>
                    <div className={styles.minimummer}>

{/* About me section */}

                    <div className={styles.aboutMeContainer}>
                        <img src={profilePic} alt='profile pic' className={styles.profilePic}/>
                        <div className={styles.aboutMe}>
                            <h1 className={styles.aboutMeTitle}>About FLO-Kian</h1>
                            <p className={styles.descriptionAboutMe}>
                                Over the years of programming, music, sports, and extracurricular math I have acquired many skills, 
                                and to convey all these educational and non-educational accomplishments as one portfolio, in this 
                                website. Apart from honing my educational skills, Olympiad level geometric and trigonometric in combination 
                                with calculus, I have mastered playing the Flamenco style guitar. This has specifically helped me to 
                                calm my mind and boost my concentration, which has profoundly impacted my academic performance.                            
                            </p>
                        </div>
                    </div>

{/* university */}

                    <div className={styles.universityContainer}>
                        <div className={styles.universities}>
                            {/* <img src={uoft} alt='uoft' className={styles.waterloo}/> */}
                        </div>
                                <p className={styles.descriptionAboutMe1}>
                                    I have had a long-life desire to pursue my education in Computer Science, 
                                    and to meet that end, I have exploited all my potentials and opportunities, 
                                    including my immigration to Canada. I have applied to the University of 
                                    Toronto since it is the stepping stone to get into the world of technology 
                                    and progress for the future. Canada's nonpareil computer science program in the 
                                    University of Toronto best fits my interest as an operating student in this major. 
                                    The educational and experimental opportunities provided through co-op programs at University 
                                    of Toronto can profoundly enrich my knowledge and experience enhancing my progress in computer science. 
                                    With my current background experience and interest in futuristic computer science outlooks, the best 
                                    university in Canada with programs such as cyber-security can pave the path of success to achieve my 
                                    educational goals.
                                </p>
                    </div>

{/* leftern pic sections */}
                        <div className={styles.leftContainer}>
                                <img src={security} alt="alt" className={styles.cybersec}/>
                                <div className={styles.leftTextContainer}>
                                    <h1 className={styles.leftTopic}>Cyber Security</h1>
                                    <p className={styles.leftDescription}>
                                    According to ML & data science evolution in different aspects of 
                                    analyzing client's personality, big companies like Meta are saving a 
                                    lot of crucial information about their users. Sadly, the elaboration of 
                                    technology causes our lives to closely interact with technology. we can see 
                                    that different companies are sharing our data for reasons like marketing, 
                                    but what if there is lick and all your life (even the parts that you are not aware of) 
                                    is accessible from a strange person which can be used for abusive purpeses.
                                    </p>
                                </div>
                        </div>
                    
{/* right pic section */}


{/* Roadmap */}
                <img src={roadmap} alt='roadmap' width='100%' className={styles.roadmap}/>

            </div>
        </div>

{/* slider linkedin accomplishments */}

                <div className={styles.show}>
                    <div className={styles.center}>
                        <Slider />
                    </div>
                </div>

            <div className={styles.centerizer}>
                <div className={styles.minimummer}>

{/* basketball */}

                    <div className={styles.basketballContainer}>
                        <div className={styles.basketballTextContainer}>
                            <h1 className={styles.basketballtopic}>Basketball</h1>
                            <p className={styles.bassketballDescription} >
                            The love of playing Basketball in our family is Hereditary; However, I experienced 
                            many sports before starting Basketball. I have had the experience of playing in the 
                            best u-18 league back in Iran and was titled as the most improved player (MIP) in 2019. 
                            I learned how to participate and be dedicated as a team member as much as I have been taught how to be a leader.                             
                            </p>
                        </div>
                            <img src={basketball} alt='basketball' className={styles.basketball}/>
                    </div>

{/* guitar */}

                    <div className={styles.guitarContainer}>
                        <img src={guitar} alt='guitar' className={styles.guitar}/>
                        <div className={styles.guitarTextContainer}>
                            <h1 className={styles.guitartopic}>Guitar</h1>
                            <p className={styles.guitarDescription} >
                            In my point of view, we have to take care of our soul as much as we are focusing on our physical health 
                            (especially back in Iran). I found the real musical passion of my life in the guitar. I have been playing 
                            the guitar since I was 10; I have participated in many concerts and recitals and played in different bands 
                            to increase my communication skills as much as my artistic technical growth.                             
                            </p>
                        </div>
                    </div>

{/* For small displays */}
                </div>
            </div>
            </>
    );
}

export default Cards;