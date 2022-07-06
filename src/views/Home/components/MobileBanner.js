import React from 'react'
import { Image } from 'react-bootstrap';

import sideImage from '../../../assets/img/sidebaner1.png'

const MobileBanner = () => {
    return (
        <div className='welcomeText mobileWelcomeText'>
            <Image src={sideImage} alt="welcome" className='d-block m-auto' />
            <h1>Welcome to the House of All Trades</h1>
            <h4>we consider our impact on people and the planet in everything we do. And we continue to ask ourselves how we can make it better. </h4>
        </div>
    )
}

export default MobileBanner