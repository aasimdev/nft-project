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
import nftDummyImg from '../../../assets/img/greendummy.jpg'
import MyNft from './MyNft'
import PastTransactions from './PastTransactions';

const ConnectWallet = () => {

    // My NFTS
    const myNfts = [
        {
            id: 1300,
            title: 'E-Commerce',
            image: nftDummyImg
        },
        {
            id: 1301,
            title: 'Property',
            image: nftDummyImg
        },
        {
            id: 1302,
            title: 'E-Commerce',
            image: nftDummyImg
        },
        {
            id: 1303,
            title: 'Property',
            image: nftDummyImg
        }
        , {
            id: 1304,
            title: 'E-Commerce',
            image: nftDummyImg
        }
        , {
            id: 1305,
            title: 'Property',
            image: nftDummyImg
        }
        , {
            id: 1306,
            title: 'E-Commerce',
            image: nftDummyImg
        }
    ]

    // Past Transactions
    const pastTransactions = [
        {
            date: 'Mar 10, 2022',
            type: 'Bought',
            amount: '0.11',
            value: '$200',
            serialno: '00321',
            from: '0x323',
            to: '0x123'
        },
        {
            date: 'Mar 02, 2022',
            type: 'Offer',
            amount: '0.2',
            value: '$200',
            serialno: '01000',
            from: '',
            to: ''
        },
        {
            date: 'Feb 02, 2022',
            type: 'Bid',
            amount: '0.11',
            value: '$300',
            serialno: '01080',
            from: '',
            to: '0x523'
        },
        {
            date: 'Jan 02, 2022',
            type: 'Bid',
            amount: '0.08',
            value: '$200',
            serialno: '08888',
            from: '',
            to: '0x623'
        }
        ,
        {
            date: 'Mar 10, 2022',
            type: 'Bought',
            amount: '0.11',
            value: '$200',
            serialno: '00321',
            from: '0x323',
            to: '0x123'
        },
        {
            date: 'Dec 12, 2021',
            type: 'Sold',
            amount: '0.18',
            value: '$200',
            serialno: '06969',
            from: '0x323',
            to: '0x123'
        },
        {
            date: 'Dec 02, 2021',
            type: 'Transfer',
            amount: '0.',
            value: '',
            serialno: '09230',
            from: '0x923',
            to: '0x123'
        },
        {
            date: 'Dec 02, 2021',
            type: 'Transfer',
            amount: '0.',
            value: '',
            serialno: '09230',
            from: '0x123',
            to: '0x923'
        }
    ]

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