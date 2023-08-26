import React, { useEffect } from 'react';

import './index.css'
import Profile from './profile.jpg'

function About() {
    return (
        <div className="about">
            <div>
                <img src={Profile}/>
                <div className="imgbg"></div>
            </div>
            <div className="about_info">
                <h1>
                    <span>KARAN</span>
                    <span>KUMAR</span>
                </h1>
                <h3>Web Developer</h3>
                <p>I excel in tackling challenges and enjoy crafting inventive solutions for
                    intricate issues. With a passion for
                    collaboration, I eagerly join forces with skilled professionals to deliver extraordinary outcomes.
                </p>
            </div>
        </div>
    );
}

export default About;
