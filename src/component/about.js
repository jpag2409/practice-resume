import React from 'react';
import MultiHeadline from './multiheadline.js';

import './index.css'
import Profile from './profile.jpg'

function About() {
    return (
        <div className="about">
            {/* <div>
                <img width={409.5} height={310} src={Profile} />
                <div className="imgbg"></div>
            </div> */}
            <div className="about_info">
                <h1>
                    <span>JUAN PABLO</span>
                    <span>ALVAREZ</span>
                </h1>
                <MultiHeadline />
                <p>I have over 2 years of experience in the IT industry, 
                    leading teams and projects with excellence and innovation. 
                    I possess a deep understanding of various technologies and 
                    how to apply them to solve complex business problems. I value integrity, 
                    collaboration and continuous learning in my work. 
                    I am always looking for new challenges and opportunities to grow as a professional and a leader.
                </p>
            </div>
        </div>
    );
}

export default About;
