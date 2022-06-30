import React from 'react'
// import Table from 'react-bootstrap'
import { Table } from 'react-bootstrap'


const PastTransactions = (props) => {

    const { transactions } = props;
    return (
        <Table responsive className="pasttranstable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount <br /> (ETH)</th>
                    <th>Value <br /> (USD)</th>
                    <th>Serial No.</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((item, index) =>
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.value}</td>
                        <td>{item.serialno}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                    </tr>
                )}

            
            </tbody>
        </Table>
    )
}

export default PastTransactions