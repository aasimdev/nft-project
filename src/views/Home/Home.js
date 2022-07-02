import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import { Button, Container, Image } from 'react-bootstrap';
import { ChevronDoubleRight } from 'react-bootstrap-icons';

import { features } from '../../data/data';

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);

    const anchors = ["welcome", "property", "advisory", "renovation", "homeservices", "ecommerce", "community"];

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
                        <Button onClick={() => setToggle(!toggle)}>
                            <span>Side Navigation</span> <ChevronDoubleRight />
                        </Button>
                    </div>
                }

                <nav id="menu" className={toggle ? 'active' : ''}>
                    <a className="menu-links d-none" data-menuanchor="welcome" href="#welcome">Welcome</a>
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