import React from 'react'
import Countdown from 'react-countdown';

const NoNftDrop = (props) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return "its ended"
        } else {
            return (
                <div className="counter">
                    <div className='count'>
                        <h6>{days}</h6>
                        <span>Day</span>
                    </div>
                    <div className='seprtor'>:</div>
                    <div className='count'>
                        <h6>{hours}</h6>
                        <span>Hrs</span>
                    </div>
                    <div className='seprtor'>:</div>
                    <div className='count'>
                        <h6>{minutes}</h6>
                        <span>Min</span>
                    </div>
                    <div className='seprtor'>:</div>
                    <div className='count'>
                        <h6>{seconds}</h6>
                        <span>Sec</span>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className='nonftdropMain' >
            <p>In our current campaign, we will split our NFT drops into 5 different tranches, releasing 2000 NFTs in each tranche. All 6 series will be available and will be tagged with a serial number. Preview the NFT artwork above.</p>
            <div className='nonftdropMain__box'>
                <h4>1st Drop</h4>
                <div className='nonftdropMain__box__content'>
                    <p>Price: <span>0.1 ETH</span></p>
                    <p>Total: <span>2000</span></p>
                    <p>Date: <span>Jun 21, 2021 00:00:00</span></p>
                    <div className='nonftdropMain__box__content__countdown'>
                        <h5>Counting down to public sale</h5>
                        <Countdown date='2022-07-20T01:02:03' renderer={renderer} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoNftDrop