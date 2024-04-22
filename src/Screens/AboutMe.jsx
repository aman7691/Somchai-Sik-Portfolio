
import React from 'react';
import Navigation from '../component/Navigation';
import "../css/aboutMe.css"
import profile from "../images/1713590976717.jpeg";
import { FaGithub, FaLinkedin, FaGoogle, FaPhone } from 'react-icons/fa';


const AboutMe = () => {
    return (
        <div className='container'>
            <div>
                <Navigation />
                <div className='whiteContainer'>
                    <div style={{ paddingTop: "100px" }}>
                    

                        <div className='descriptionFlex'>
                            <div className='description'>
                                <div className='desHeader'>
                                    <h2>I'M Somchai Sik, I am from Thailand, </h2>
                                </div>
                                <div className='desPara'>
                                    <p>
                                        Highly motivated and skilled Fullstack Developer with a strong foundation in web development and a passion for creating innovative digital solutions. A recent graduate of Langara College, equipped with extensive knowledge in HTML, CSS, JavaScript, React.js, React Native, MongoDB, Java, Express.js, and Node.js. Proficient in both frontend and backend technologies, adept at crafting dynamic and user-friendly applications.
                                        Throughout my academic and professional journey, I have collaborated effectively within team environments, contributing to the successful completion of various projects. My experience working collaboratively has honed my communication and interpersonal skills, making me a valuable team member. With a keen eye for detail and a commitment to delivering high-quality work.
                                    </p>
                                    <div className='socialIcons'>
                                        <a href="https://github.com/aman7691" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="icon" style={{ color: 'grey', fontSize: '24px' }} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/somchai-sik/" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="icon" style={{ color: 'grey', fontSize: '24px' }} />
                                        </a>
                                        <a href="mailto:somchai7691@gmail.com">
                                            <FaGoogle className="icon" style={{ color: 'grey', fontSize: '24px' }} />
                                        </a>
                                        <a href="tel:+7786362105">
                                            <FaPhone className="icon" style={{ color: 'grey', fontSize: '24px' }} />
                                        </a>
                                    </div>

                                </div>

                            </div>
                            <div>
                                <img className='profileBig' src={profile} alt="" />
                                <div className='socialIconsAbout'>
                                    <div className='followMe'>
                                        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                                            <FaGithub className="icon" style={{ color: 'grey', fontSize: '20px' }} />
                                        </a>
                                        <p>My Github Repositories</p>
                                    </div>
                                    <div className='followMe'>
                                        <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="icon" style={{ color: 'grey', fontSize: '20px' }} />
                                        </a>
                                        <p>My Github Repositories</p>
                                    </div>

                                    <div className='followMe'>
                                        <a href="mailto:youremail@gmail.com">
                                            <FaGoogle className="icon" style={{ color: 'grey', fontSize: '20px' }} />
                                        </a>
                                        <p>My Github Repositories</p>
                                    </div>

                                    <div className='followMe'>
                                        <a href="tel:+1234567890">
                                            <FaPhone className="icon" style={{ color: 'grey', fontSize: '20px' }} />
                                        </a>
                                        <p>My Github Repositories</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe