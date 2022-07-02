import React from 'react'
import {Tab, Nav, Image } from 'react-bootstrap'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';

import nftDummyImg from '../../../assets/img/greendummy.jpg'

const NftDropsSlider = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div className='slickactions'><ChevronRight /></div>,
        prevArrow: <div className='slickactions'><ChevronLeft /></div>
    };


    return (
        <div className='attributeSlider'>
            <Tab.Container id="connectWAllet" defaultActiveKey="1drop">
                <Nav variant="pills" fill className='connectWNavs'>
                    <Nav.Item>
                        <Nav.Link eventKey="1drop">
                            1<sup>st</sup> <span>Drop</span>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2drop"> 2<sup>nt</sup> <span>Drop</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3drop"> 3<sup>rd</sup> <span>Drop</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4drop"> 4<sup>th</sup> <span>Drop</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="5drop"> 5<sup>th</sup> <span>Drop</span></Nav.Link>
                    </Nav.Item>
                </Nav>


                <Tab.Content>
                    <Tab.Pane eventKey="1drop">
                        <div className='dropMain'>
                            <Slider {...settings}>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2drop">
                        <div className='dropMain'>
                            <Slider {...settings}>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3drop">
                        <div className='dropMain'>
                            <Slider {...settings}>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4drop">
                        <div className='dropMain'>
                            <Slider {...settings}>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="5drop">
                        <div className='dropMain'>
                            <Slider {...settings}>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>
                                <div>
                                    <div className='dropslide'>
                                        <Image src={nftDummyImg} arc="image" />
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </Tab.Pane>
                </Tab.Content>

            </Tab.Container>
        </div>
    )
}

export default NftDropsSlider