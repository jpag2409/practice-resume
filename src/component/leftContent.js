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
                        <h3>B.E Electronics</h3>
                        <p>Dawood UET</p>
                        <p>2019-2023</p>
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
                            <span><Icon.Controller /></span>
                            <p>Gaming</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftContent;
