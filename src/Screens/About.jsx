import React, { useState, useEffect } from 'react';
import Navigation from '../component/Navigation';
import "../css/main.css";
import profile from "../images/119513775_3838994926129029_5988928011152543341_n.jpg";
import profileTwo from "../images/505f32d0-af51-4b4f-bba5-0e93474d3a37.jpeg";
import { FaGithub, FaLinkedin, FaGoogle, FaPhone, FaJs, FaHtml5, FaCss3Alt, FaReact, FaAws, FaLinux, FaDatabase } from 'react-icons/fa';
import { DiReact, DiMongodb } from 'react-icons/di';

const About = () => {
    const [showAllSkills, setShowAllSkills] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleSkills = () => {
        setShowAllSkills(!showAllSkills);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > 70) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container'>
            <div>
                <Navigation />
                <div className='whiteContainer'>
                    <div style={{ paddingTop: "100px" }}>
                        <div style={{ paddingLeft: "20px" }}>
                            <img className={`profileImg ${isSticky ? 'sticky' : ''}`} src={profile} alt="" />
                        </div>
                        <div className='descriptionFlex'>
                            <div className='description'>
                                <div className='desHeader'>
                                    <h2>Full-stack web and mobile app developer</h2>
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
                            <img className='profileBig' src={profileTwo} alt="" />
                        </div>
                    </div>

                    <div className='skillDiv'>
                        {(showAllSkills ?
                            <>
                                <div className='skillSingle'>
                                    <FaJs className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>JavaScript</h3>
                                    <p>JavaScript is a fundamental programming language for web development.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaHtml5 className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>HTML</h3>
                                    <p>HTML is the standard markup language for creating web pages.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaCss3Alt className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>CSS</h3>
                                    <p>CSS is used for styling web pages and applications.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>React</h3>
                                    <p>React is a JavaScript library for building user interfaces.</p>
                                </div>
                                <div className='skillSingle'>
                                    <DiReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>React Native</h3>
                                    <p>React Native is a framework for building native mobile apps using React.</p>
                                </div>
                                <div className='skillSingle'>
                                    <DiMongodb className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>MongoDB</h3>
                                    <p>MongoDB is a NoSQL database for storing data in JSON-like documents.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaAws className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>AWS</h3>
                                    <p>Amazon Web Services (AWS) provides on-demand cloud computing platforms and APIs.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaLinux className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>Linux</h3>
                                    <p>Linux is an open-source operating system used for servers and other computing devices.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaDatabase className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>Firebase</h3>
                                    <p>Firebase is a platform developed by Google for creating mobile and web applications.</p>
                                </div>
                            </>
                            :
                            <>
                                <div className='skillSingle'>
                                    <FaJs className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>JavaScript</h3>
                                    <p>JavaScript is a fundamental programming language for web development.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaHtml5 className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>HTML</h3>
                                    <p>HTML is the standard markup language for creating web pages.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaCss3Alt className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>CSS</h3>
                                    <p>CSS is used for styling web pages and applications.</p>
                                </div>
                                <div className='skillSingle'>
                                    <FaReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>React</h3>
                                    <p>React is a JavaScript library for building user interfaces.</p>
                                </div>
                                <div className='skillSingle'>
                                    <DiReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>React Native</h3>
                                    <p>React Native is a framework for building native mobile apps using React.</p>
                                </div>
                                <div className='skillSingle'>
                                    <DiMongodb className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                                    <h3>MongoDB</h3>
                                    <p>MongoDB is a NoSQL database for storing data in JSON-like documents.</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button className="seeMoreButton" onClick={toggleSkills}>{showAllSkills ? 'See Less' : 'See More'}</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
