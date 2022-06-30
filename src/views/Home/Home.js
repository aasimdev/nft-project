import React, { useEffect, useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Header from '../../constant/Header/Header';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import { Button, Container, Image } from 'react-bootstrap';
import { ChevronDoubleRight } from 'react-bootstrap-icons';


import featureCardImg1 from '../../assets/img/featurecard1.png'
import featureCardImg2 from '../../assets/img/featurecard2.png'
import featureCardImg3 from '../../assets/img/featurecard3.png'
import featureCardImg4 from '../../assets/img/featurecard4.png'
import featureCardImg5 from '../../assets/img/featurecard5.png'
import featureCardImg6 from '../../assets/img/featurecard6.png'

import feature1 from '../../assets/img/feature1.png'
import feature2 from '../../assets/img/feature2.png'
import feature3 from '../../assets/img/feature3.png'
import feature4 from '../../assets/img/feature4.png'
import feature5 from '../../assets/img/feature5.png'
import feature6 from '../../assets/img/feature6.png'

import propertyGif from '../../assets/img/Property-Gif.gif'
import advisoryGif from '../../assets/img/Advisory-gif.gif'
import renovationGif from '../../assets/img/Renovation-gif.gif'
import homeservicesGif from '../../assets/img/Home-Services-gif.gif'
import ecommerceGif from '../../assets/img/ecom-gif.gif'
import communityGif from '../../assets/img/Community-gif.gif'

import videoclip from '../../assets/video/IKEA Australia animated video.mp4'


import videoScreenshot from '../../assets/img/screenshot.png'

const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);

    const anchors = ["welcome", "property", "advisory", "renovation", "homeservices", "ecommerce", "community"];

    // Features Data

    const features = [

        {
            id: 1,
            title: 'Property',
            alias: 'property',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature1,
            videos: [
                {
                    id: 0,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg1,
            bgAnimation: propertyGif

        },

        {
            id: 2,
            title: 'Advisory',
            alias: 'advisory',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature2,
            videos: [
                {
                    id: 0,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: videoclip,
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg2,
            bgAnimation: advisoryGif

        },

        {
            id: 3,
            title: 'Renovation',
            alias: 'renovation',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature3,
            videos: [
                {
                    id: 0,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg3,
            bgAnimation: renovationGif

        },
        {
            id: 4,
            title: 'Home Services',
            alias: 'homeservices',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature4,
            videos: [
                {
                    id: 0,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: videoclip,
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg4,
            bgAnimation: homeservicesGif

        },
        {
            id: 5,
            title: 'E-Commerce',
            alias: 'ecommerce',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature5,
            videos: [
                {
                    id: 0,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg5,
            bgAnimation: ecommerceGif

        },
        {
            id: 6,
            title: 'Community',
            alias: 'community',
            keyfeatures: [
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 10 that will help make things easier and better',
                },
                {
                    keyName: 'Feature 8 that will help make things better and efficient',
                },
                {
                    keyName: 'No platform fees for users',
                },
            ],
            character: 'Power character that is cool and nice',
            featureImage: feature6,
            videos: [
                {
                    id: 0,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 1,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                },
                {
                    id: 2,
                    video: videoclip,
                    tumbnail: videoScreenshot
                },
                {
                    id: 3,
                    video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                    tumbnail: videoScreenshot
                }
            ],
            featuresmallImage: featureCardImg6,
            bgAnimation: communityGif

        },
    ]


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