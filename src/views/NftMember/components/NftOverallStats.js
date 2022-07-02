import React from 'react'
import { Button } from 'react-bootstrap'
import { ListStars } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const NftOverallStats = () => {
    return (
        <div className='overallStat' id="list-of-ticket-holder">
            <h3>Overall stats</h3>
            <div className='overallStat__box'>
                <div className='overallStat__box__stats'>
                    <div className='overallStat__box__stat'>
                        <span>Total NFT Supply</span>
                        <h5>2,500</h5>
                    </div>

                    <div className='overallStat__box__stat'>
                        <span>Total NFT Left</span>
                        <h5>1,000/2,500</h5>
                    </div>
                    <div className='overallStat__box__stat'>
                        <span>Value of Sales</span>
                        <h5>84 ETH ($250k)</h5>
                    </div>
                </div>
                <div className='listnftholder'>
                    <Link to="list-of-ticket-holder">
                        <Button variant="secondary">
                            <ListStars /> <span>List of NFT holders</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NftOverallStats