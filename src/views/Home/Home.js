import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import { Button, Container, Image } from 'react-bootstrap';
import { ChevronDoubleRight } from 'react-bootstrap-icons';

import { features } from '../../data/data';
import MobileBanner from './components/MobileBanner';

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);


    const toggleHandler = () => {
        document.body.classList.toggle("overflow-hidden");
        window.fullpage_api.setAllowScrolling(false);
        setToggle(true);
    }

    const hideToggleHandler = () => {
        document.body.classList.toggle("overflow-hidden");
        window.fullpage_api.setAllowScrolling(true);
        setToggle(false);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 991;

    if (!isMobile) {
        var anchors = ["welcome", "property", "advisory", "renovation", "homeservices", "ecommerce", "community"];
    } else {
        var anchors = ["welcome", "welcome2", "property", "advisory", "renovation", "homeservices", "ecommerce", "community"];
    }


    return (
        <>
            <Container>
                <ReactFullpage
                    anchors={anchors}
                    menu="#menu"
                    navigation
                    scrollOverflow={false}

                    navigationTooltips={anchors}
                    css3={true}
                    render={() => {
                        return (
                            <div id="fullpage-wrapper" className='fullpageWrapper'>
                                {isMobile &&
                                    <div className="section section2">
                                        <MobileBanner />
                                    </div>
                                }
                                <div className="section section1">
                                    <Welcome />
                                </div>

                                {features.map((feature, index) =>
                                    <div className="section" key={index}>
                                        <Feature feature={feature} />
                                    </div>
                                )}


                            </div>
                        );
                    }}
                />
                {isMobile &&
                    <div className={`mobileRightOpen ${toggle ? 'active' : ''}`} >
                        <Button onClick={toggleHandler}>
                            <span>Side Navigation</span> <ChevronDoubleRight />
                        </Button>
                    </div>
                }
                {toggle &&
                    <div className="mobileOverlay" onClick={hideToggleHandler}></div>
                }

                <nav id="menu" className={toggle ? 'active' : ''}>
                    <a className="menu-links d-none" data-menuanchor="welcome" href="#welcome">Welcome</a>
                    <a className="menu-links d-none" data-menuanchor="welcome2" href="#welcome2">Welcome</a>
                    {features.map((item, index) =>
                        <a className="menu-links" data-menuanchor={item.alias} href={`#${item.alias}`} key={index}>
                            <div className={`featureCard ${item.title == "Advisory" ? "advisorybox" : item.title == "Renovation" ? "renovationBox" : item.title == "Home Services" ? "homeserviceBox" : item.title == "E-Commerce" ? "ecommerceBox" : item.title == "Community" ? "communityBox" : ''}`}>
                                <div className='featureCard__img'>
                                    <Image src={item.featuresmallImage} />
                                </div>
                                <p>{item.title}</p>
                            </div>
                        </a>
                    )}


                </nav>
            </Container>
        </>
    )
}

export default Home