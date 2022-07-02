import React, { useState } from 'react'
import { Tab, Nav, Image, Button } from 'react-bootstrap'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';

import mynftImg from '../../../assets/img/mynft.png'
import pasttransImg from '../../../assets/img/pasttrans.png'
import rewardsImg from '../../../assets/img/rewards.png'

import MyNft from './MyNft'
import PastTransactions from './PastTransactions';

import { myNfts, pastTransactions } from '../../../data/data';
import MyNftNo from '../../NoContentExist/MyNftNo';

const ConnectWallet = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <div className='slickactions'><ChevronRight /></div>,
        prevArrow: <div className='slickactions'><ChevronLeft /></div>
    };

    return (

        <Tab.Container id="connectWAllet" defaultActiveKey="mynft">
            <Nav variant="pills" className='connectWNavs'>
                <Nav.Item>
                    <Nav.Link eventKey="mynft">
                        <div className='walletIconc'>
                            <Image src={mynftImg} />
                        </div>
                        <span>My NFT</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="postTransection"> <div className='walletIconc'>
                        <Image src={pasttransImg} />
                    </div><span>Past Transactions</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="rewards">   <div className='walletIconc'>
                        <Image src={rewardsImg} />
                    </div><span>Rewards</span></Nav.Link>
                </Nav.Item>
            </Nav>


            <Tab.Content>
                <Tab.Pane eventKey="mynft">
                    <div className='mynftMain mynftBox'>
                        {
                            myNfts.length > 0 ?
                                <>
                                    <div className='mynftBox__header'>
                                        <Button variant="secondary">View Demo <i className="fas fa-chevron-right"></i></Button>
                                    </div>
                                    <div className='mynftBox__content'>
                                        <Slider {...settings}>
                                            {
                                                myNfts &&
                                                myNfts.map((nft) => (
                                                    <MyNft data={nft} />
                                                ))}
                                        </Slider>
                                    </div>
                                </>
                                :
                              <MyNftNo />
                        }

                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="postTransection">
                    <div className='mynftMain pasttransm'>
                        {pastTransactions &&
                            <PastTransactions transactions={pastTransactions} />
                        }

                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="rewards">
                    <div className='mynftMain rewardsbox'>
                        <h3>COMING SOON</h3>
                    </div>
                </Tab.Pane>
            </Tab.Content>

        </Tab.Container>
    )
}

export default ConnectWallet