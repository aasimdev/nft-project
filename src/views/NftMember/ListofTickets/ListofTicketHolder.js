import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { listofTicketHolder } from '../../../data/data'
import NoTicketHolder from '../../NoContentExist/NoTicketHolder'

import noticketHolderImage from '../../../assets/img/no-listofticket-holder.png'

const ListofTicketHolder = () => {



    return (
        <Container>
            <div className='nftsub'>
                <h1>List of Ticket holders</h1>
                {listofTicketHolder.length > 0 ?
                    <div className='listticketholder'>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>aCCOUNT</th>
                                    <th>tICKETS OWNED</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listofTicketHolder &&
                                    listofTicketHolder.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.account}</td>
                                            <td>{item.ticketOwned}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </div>

                    :
                    <NoTicketHolder icon={noticketHolderImage} text="No Ticket Holder" />
                }


            </div>
        </Container>
    )
}

export default ListofTicketHolder