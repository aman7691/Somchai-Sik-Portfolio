import React from 'react';
import Navigation from '../component/Navigation';
import "../css/aboutMe.css"
import profile from "../images/smiling-funny-young-man-casual-260nw-1571329726.webp";
import { DiReact, DiMongodb } from 'react-icons/di';

import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaAws, FaLinux, FaDatabase, FaLink } from 'react-icons/fa';



const Project = () => {
    return (
        <div className='container'>
            <div>
                <Navigation />
                <div className='whiteContainer'>
                    <div style={{ paddingTop: "100px" }}>
                        <div className='descriptionFlex'>
                            <div className='description'>
                                <div className='desHeader'>
                                    <h2>Full-stack web and mobile app developer, and amateur astronaut.</h2>
                                </div>
                                <div className='desPara'>
                                    <p>
                                        I am a backend developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div>


                    <div className='skillDiv'>

                        <div className='skillSingle'>
                            <FaJs className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>MyGuru</h3>
                            <p>My Guru is a mobile app that helps instructors and students construct their schedules and create academic quizzes.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaHtml5 className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>Wise Care</h3>
                            <p>A web platform that connects seniors to volunteers who can assist them with their daily tasks.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaCss3Alt className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>Smart Space</h3>
                            <p>Smart Space: Easily book study spots in campus buildings with customizable filters for personalized studying.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>React</h3>
                            <p>React is a JavaScript library for building user interfaces.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <DiReact className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>React Native</h3>
                            <p>React Native is a framework for building native mobile apps using React.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <DiMongodb className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>MongoDB</h3>
                            <p>MongoDB is a NoSQL database for storing data in JSON-like documents.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaAws className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>AWS</h3>
                            <p>Amazon Web Services (AWS) provides on-demand cloud computing platforms and APIs.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaLinux className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>Linux</h3>
                            <p>Linux is an open-source operating system used for servers and other computing devices.</p>
                            <FaLink />
                        </div>
                        <div className='skillSingle'>
                            <FaDatabase className="icon" style={{ color: 'grey', fontSize: '40px' }} />
                            <h3>Firebase</h3>
                            <p>Firebase is a platform developed by Google for creating mobile and web applications.</p>
                            <FaLink />
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    )
}

export default Project