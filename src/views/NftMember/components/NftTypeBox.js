import React from 'react'
import { Image } from 'react-bootstrap'

const NftTypeBox = (props) => {

    const { item, nftDropHandler, type } = props;

    return (
        <div
            className="nftType__carousel__slide"
            data-type={type}
            onClick={nftDropHandler}
            data-sold={item.sold}
            style={type == 'NFT-Drop' || type == "For-Sale" || type == "Recent-Transaction" ? { cursor: 'pointer' } : {}}>

            <div className='nftType__carousel__picture'>
                <Image src={item.image} />
            </div>
            {item.id &&
                <span># {item.id}</span>
            }
            {item.title &&
                <p>{item.title}</p>
            }
            {item.sold &&
                <h6>SOLD</h6>
            }

        </div>
    )
}

export default NftTypeBox