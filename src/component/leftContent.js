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
                        <h3>Kurt Huber Gymnasium</h3>
                        <p>Exchange year abroad</p>
                        <p>Munich, Germany</p>
                        <p>2014-2015</p>
                    </div>
                </div>
                <div className="recommendation">
                    <h2>Recommendation</h2>
                    <div>
                        <h3>Joseph Rudik</h3>
                        <h4>Data Architect at Santander Bank</h4>
                        <em>“Juan Pablo is a dedicated person 
                            who is willing and ready to learn 
                            new skill, absorb knowledge with amazing speed, <br></br>and turn out
                            projects that are well written and to the point. <br></br>I would highly
                            recommend Juan Pablo in any capacity as employee and I am sure
                            he would be invaluable asset in any role”
                        </em>
                    </div>
                </div>
                {/* <div className="hobbies">
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
                </div> */}
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
