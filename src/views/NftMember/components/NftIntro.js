import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NftAttribute from './NftAttribute'



import NftDropsSlider from './NftDropsSlider';

const NftIntro = () => {



    return (
        <div className='nftintro'>
            <div className='nftintro__text'>
                <h2>NFT INTRODUCTION</h2>
                <p>As little as four years ago, it would have taken a really confident person to predict lawrence wong will in all probability become singapore’s fourth prime minister. But while glowing tributes pour in on social media, its remarkable how far wong appeard to be from the top job at one point in</p>
                <p>Cast your mind back to 2018. No one knows what a covid is and donald trump is still the US president. Until 2021, wong flew under the radar during the frequent media speculation over the identity of the prime minister Lee</p>
            </div>

            <Row>
                <Col lg={3}>
                    <NftAttribute />
                </Col>
                <Col lg={9}>
                    <NftDropsSlider />
                </Col>
            </Row>
        </div>
    )
}

export default NftIntro