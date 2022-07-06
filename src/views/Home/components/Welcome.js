import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Player, BigPlayButton, ControlBar } from "video-react";



import sideImage from '../../../assets/img/sidebaner1.png'
import DummyVideo from '../../../assets/video/IKEA Australia animated video.mp4'
import vs1 from "../../../assets/img/screenshot.png";

const Welcome = () => {
    return (
        <section className='welcomeMain'>

            <Row className='align-items-center'>
                <Col lg={6}>
                    <div className='welcomeContant desktopWelcome'>
                        <div className='welcomeText'>
                            <h1>Welcome to the House of All Trades</h1>
                            <h4>we consider our impact on people and the planet in everything we do. And we continue to ask ourselves how we can make it better. </h4>
                            <ul className='theme-dot-list'>
                                <li> Feature 1 where it will help user efficiently</li>
                                <li>Integrated feature 2 that will also help user efficiently and effectively</li>
                                <li>Transparency is the key to everything. Lets rock.</li>
                                <li>Modern features that will benefit all stakeholders to interact and enjoy life.</li>
                            </ul>
                        </div>
                        <div className='welcomeVideo'>
                            <Player src={DummyVideo} poster={vs1} height="297" fluid={false}>
                                <BigPlayButton position="center" />
                            </Player>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='welcomeImg text-center d-none d-lg-block'>
                        <Image src={sideImage} alt="welcome" />
                    </div>
                </Col>
            </Row>

        </section>
    )
}

export default Welcome