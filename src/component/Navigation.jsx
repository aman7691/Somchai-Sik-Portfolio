import React from 'react';
import '../css/navigation.css';
import { Link } from 'react-router-dom';

// Navigation component

const Navigation = () => {
    

    return (
        <div className='navigation'>
            <div className='nav'>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/about">About</Link></p>
                <p><Link to="/project">Project</Link></p>
                <p>Contact</p>
            </div>
        </div>
    );
}

export default Navigation;
