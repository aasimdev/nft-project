import React from 'react'
import { Image } from 'react-bootstrap'

const MyNft = (props) => {

    const { data } = props;
    return (
        <div className='nftBox'>
            <div className='nftBox__img'>
                <Image src={data.image} />
            </div>
            <p>{data.title}</p>
            <p># {data.id}</p>
        </div>
    )
}

export default MyNft