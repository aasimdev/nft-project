import React from 'react'
import { Image } from 'react-bootstrap'

import noRecentTransImage from '../../assets/img/norecenttransaction.png'

const NoNftRecentTrans = () => {
    return (
        <div className='norecenttrans'>
            <div className='norecenttrans__inner'>
                <Image src={noRecentTransImage} />
                <p>No recent transactions</p>
            </div>
        </div>
    )
}

export default NoNftRecentTrans