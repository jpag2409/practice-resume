import React, { useEffect } from 'react';
import * as  Icon from 'react-bootstrap-icons'

import './index.css'

function Home() {
    return (
        <div className="top">
            <div className="area">
                <span><Icon.GeoAltFill /></span>
                {/* <i className="bi bi-geo-alt-fill"></i> */}
                <span>
                    <p className="bold">AREA</p>
                    <p>Av. Homero 1532, Polanco II Secc, Miguel Hidalgo, 11530</p>
                </span>
            </div>
            <div className="info">
                <span>
                    <p className="bold">PHONE</p>
                    <p>+52 9993680060</p>
                </span>
                <span>
                    <p className="bold">EMAIL</p>
                    <p>jpalvarez@proton.me.com</p>
                </span>
                <span>
                    <p className="bold">WEB</p>
                    <p><a href="https://kkvmalhi-react-portfolio.web.app/">My Portfolio</a></p>
                </span>
            </div>
        </div>
    );
}

export default Home;
