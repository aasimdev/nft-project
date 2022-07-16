import React, { useState, useEffect } from 'react';

import { Container, Image } from 'react-bootstrap';
import { Check2 } from 'react-bootstrap-icons';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Player, BigPlayButton, ControlBar } from "video-react";

import videoScreenshot from '../../../assets/img/screenshot.png'

import { useLocation } from 'react-router-dom'


const Feature = (props) => {

    const { feature } = props;
    const location = useLocation();

    const [source, setSource] = useState(feature.videos[0].video);
    const [player, setPlayer] = useState(null);

    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        swipeToSlide: true,
        focusOnSelect: true,
        vertical: true,
        loop: true,
        responsive: [
            {
              breakpoint: 1600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 1440,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
              },
            {
                breakpoint: 991,
                settings: {
                  vertical: false,
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 600,
              settings: {
                vertical: false,
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
          ]
    };


    const playVideoThumbnail = (name) => {
        setSource(feature.videos[name].video);
        player.load();
        player.muted = false
    }

    useEffect(() => {
        setTimeout(() => {
            player.pause();
        }, 0)
      
    }, [location])

    return (
        <div className='feature' >
   
                <div className='featureInner' style={{ background: `url(${feature.bgAnimation})` }}>
                    <div className={`featureBox ${feature.title == "Property" ? "propertybox" : feature.title == "Advisory" ? "advisorybox" : feature.title == "Renovation" ? "renovationBox" : feature.title == "Home Services" ? "homeserviceBox" : feature.title == "E-Commerce" ? "ecommerceBox" : feature.title == "Community" ? "communityBox" : feature.title == "Property" ? "propertyBox" : ''}`}>
                        <h2>{feature.title}</h2>
                        <div className='featureBox__keys'>
                            <div className='featureBox__keys__key'>
                                <h5>Key Features</h5>
                                <ul className='theme-check-list'>
                                    {feature.keyfeatures.map((item, index) => {
                                        return <li key={index}><Check2 /> <span>{item.keyName}</span></li>

                                    })
                                    }

                                </ul>
                            </div>
                            <div className='featureBox__keys__key'>
                                <h5>Character {feature.id}</h5>
                                <ul className='theme-check-list'>
                                    <li><span>{feature.character}</span></li>
                                </ul>
                            </div>
                            <div className='featureCharacter'>
                                <Image src={feature.featureImage} />
                            </div>
                        </div>
                    </div>
                    <div className='feature__videowrap'>
                        <div className="slider-galeria">
                            <div className='featureVideoMain'>
                                <Player ref={(player) => setPlayer(player)} playsInline autoPlay muted poster={videoScreenshot} fluid={false} height={224}>
                                    <source src={source} />
                                    <ControlBar autoHide={false} disableCompletely={true} />
                                    <BigPlayButton position="center" />
                                </Player>
                            </div>
                        </div>
                        <div className="thumbnail-slider-wrap">
                            <Slider
                                {...settingsThumbs}>

                                {feature.videos.map(slide =>
                                    <div className="slick-slide" key={slide.id}>
                                        <div className="thumbnailBox" onClick={() => playVideoThumbnail(slide.id)}>
                                            <div className="thumbnail_img">
                                                <img src={slide.tumbnail} alt={slide.id} />
                                                <div className='plyicon'>
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="15" cy="15" r="15" fill="white" />
                                                        <path d="M19.5007 14.134C20.1674 14.5189 20.1674 15.4811 19.5007 15.866L13.5007 19.3301C12.8341 19.715 12.0007 19.2339 12.0007 18.4641L12.0007 11.5359C12.0007 10.7661 12.8341 10.285 13.5007 10.6699L19.5007 14.134Z" fill="#28DAFF" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {/* <p>caption</p> */}
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
      
        </div>
    )
}

export default Feature