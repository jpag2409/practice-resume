import React from 'react';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function LeftContent() {
    return (
        <div className="main">
            <div className="left">
                <div className="education">
                    <h1>Education</h1>
                    <div>
                        <h3>B.Sc. Applied Mathematics</h3>
                        <p>Instituto Tecnológico Autónomo de México (ITAM)</p>
                        <p>August 2016 – December 2021</p>
                    </div>
                    <div>
                        <h3>Intermediate</h3>
                        <p>Sindh Public Collage Umerkot</p>
                        <p>2018-2019</p>
                    </div>
                    <div>
                        <h3>Matric</h3>
                        <p>Sindh Public School Umerkot</p>
                        <p>2017-2018</p>
                    </div>
                </div>
                <div className="hobbies">
                    <h1>Hobbies</h1>
                    <div>
                        <span>
                            <span><Icon.Book /></span>
                            <p>Reading</p>
                        </span>
                        <span>
                            <span><Icon.CodeSlash /></span>
                            <p>Coding</p>
                        </span>
                        <span>
                            <span><Icon.MusicNoteBeamed /></span>
                            <p>Music</p>
                        </span>
                        <span>
                            <span><Icon.Compass /></span>
                            <p>Trekking</p>
                        </span>
                    </div>
                </div>
                <div className="social_media">
                    <h1>Social Media</h1>
                    <div>
                        <span>
                            <a href='https://wa.me/+529993680060/'>
                                <span><Icon.Whatsapp /></span>
                                <p>Whatsapp</p>
                            </a>
                        </span>
                        <span>
                            <a href='https://www.linkedin.com/in/jpag2409/'>
                                <span><Icon.Linkedin /></span>
                                <p>Linkedin</p>
                            </a>
                        </span>
                        <span>
                            <a href='https://instagram.com/jpalvarezg?igshid=NGVhN2U2NjQ0Yg=='>
                                <span><Icon.Instagram /></span>
                                <p>Instagram</p>
                            </a>
                        </span>
                        <span>
                            <a href='https://github.com/jpag2409/'>
                                <span><Icon.Github /></span>
                                <p>Github</p>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftContent;
