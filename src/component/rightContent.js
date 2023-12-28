import React from 'react';

import './index.css'

function RightContent() {
    return (
        <div className="right">
            <div className="project">
                <h1>Experience</h1>
                <div>
                    <h3>IT Security Developer & Database Administrator</h3>
                    <p>OCD Tech</p>
                    <p>July 2022 – Ongoing</p>
                    <p>Remote</p>
                    <ul>
                        <li>Led a key project for Santander US, optimizing asset management tools.</li>
                        <li>Established robust database security controls and streamlined stored procedures and views.</li>
                        <li>Automated ETL workflows using Python, integrating Selenium, APIs, and SQL Server for timely data
                            processing.</li>
                        <li>Engineered a comprehensive Python program to audit user, group and file system privileges across
                            thousands of Unix and AIX servers for Santander México, pinpointing data transformation errors and count
                            discrepancies.</li>
                    </ul>
                </div>
            </div>
            <div className="certificate">
                <h1>Certificate</h1>
                <div>
                    <div>
                        <h3>Become an Ethical Hacker</h3>
                        <p>LinkedIn Learning <span>12/2022</span></p>
                    </div>
                    <div>
                        <h3>DeepLearning.AI TensorFlow Developer
                        <br></br>Professional Certificate</h3>
                        <p>Coursera<span>10/2020</span></p>
                    </div>
                    <div>
                        <h3>B2 First Certificate in English</h3>
                        <p>Cambridge English Language Assessment<span>08/2015</span></p>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div>
                    <div className="ui-widgets">
                        <div className="ui-values">Python</div>
                    </div>
                    <div className="ui-widgets">
                        <div className="ui-values">Java</div>
                    </div>
                    <div className="ui-widgets">
                        <div className="ui-values">Transact-SQL</div>
                    </div>
                    <div className="ui-widgets">
                        <div className="ui-values">MongoDB</div>
                    </div>
                    <div className="ui-widgets">
                        <div className="ui-values">git</div>
                    </div>
                </div>
                <div>
                    <div className="ui-widgets_2">
                        <div className="ui-values">HTML</div>
                    </div>
                    <div className="ui-widgets_2">
                        <div className="ui-values">CSS</div>
                    </div>
                    <div className="ui-widgets_2">
                        <div className="ui-values">Javascript</div>
                    </div>
                    <div className="ui-widgets_2">
                        <div className="ui-values">React js</div>
                    </div>
                    <div className="ui-widgets_2">
                        <div className="ui-values">Node js</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightContent;
