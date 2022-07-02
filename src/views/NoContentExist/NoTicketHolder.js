import React from 'react'
import { Image } from 'react-bootstrap'


const NoTicketHolder = (props) => {
    const { icon, text } = props
    return (
        <div className='noTicketHolder'>
            <div className='noTicketHolder__inner'>
                <Image src={icon} />
                <p>{text}</p>
            </div>
        </div>
    )
}

export default NoTicketHolder