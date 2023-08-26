import React from 'react';

import './index.css'

function RightContent() {
    return (
        <div className="right">
            <div className="project">
                <h1>Project</h1>
                <div>
                    <h4><a href="https://kkvmalhi-react-portfolio.web.app/" target="_blank">React Portfolio</a></h4>
                    <h4><a href="https://github.com/KaranKumar05/CURD-App-MongoDB.git" target="_blank">CURD-App with MongoDb</a></h4>
                    <h4><a href="https://github.com/KaranKumar05/My-Gaming-Web.git" target="_blank">My Gaming Web</a></h4>
                    <h4><a href="https://karankumar05.github.io/flappy-bird/" target="_blank">Flappy Bird Game</a></h4>
                    <h4><a href="https://karankumar05.github.io/tic_tac_tio/">Tic Tac Teo Game</a></h4>
                </div>
            </div>
            <div className="certificate">
                <h1>Certificate</h1>
                <div>
                    <div>
                        <h3>HTML CSS & JavaScript</h3>
                        <p>orginzation <span>04/2022-07/2022</span></p>
                    </div>
                    <div>
                        <h3>Responsive Web Design</h3>
                        <p>orginzation <span>08/2022-12/2022</span></p>
                    </div>
                    <div>
                        <h3>Web & App Development</h3>
                        <p>SMIT <span>01/2023-Present</span></p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                    <div>
                        <div className="ui-widgets">
                            <div className="ui-values">HTML<br />CSS</div>
                        </div>
                        <div className="ui-widgets">
                            <div className="ui-values">Java<br />Script</div>
                        </div>
                        <div className="ui-widgets">
                            <div className="ui-values">React js</div>
                        </div>
                        <div className="ui-widgets">
                            <div className="ui-values">Node js</div>
                        </div>
                        <div className="ui-widgets">
                            <div className="ui-values">Express</div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default RightContent;
