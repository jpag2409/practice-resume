import React from 'react';
import MultiHeadline from './multiheadline.js';

import './index.css'
import Profile from './profile.jpg'

function About() {
    return (
        <div className="about">
            <div>
                <img width={409.5} height={310} src={Profile} />
                <div className="imgbg"></div>
            </div>
            <div className="about_info">
                <h1>
                    <span>KARAN</span>
                    <span>KUMAR</span>
                </h1>
                <MultiHeadline />
                <p>I excel in tackling challenges and enjoy crafting inventive solutions for
                    intricate issues. With a passion for
                    collaboration, I eagerly join forces with skilled professionals to deliver extraordinary outcomes.
                </p>
            </div>
        </div>
    );
}

export default About;
