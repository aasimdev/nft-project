import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Image, Modal, Table } from 'react-bootstrap'

import filterIcon from '../../../assets/img/filter.png'
import NftTypeBox from '../components/NftTypeBox';

import { seriestype, forsaleList } from '../../../data/data';
import SealAttributes from '../components/SealAttributes';

import Select, { components } from 'react-select';

import iconnoforSale from '../../../assets/img/no-nftforsale.png'
import NoTicketHolder from '../../NoContentExist/NoTicketHolder';

import nftDummy from '../../../assets/img/greendummy-lg.jpg'

const ForSale = () => {
    const [selected, setSelected] = useState([]);
    const [searchFilter, setSearchFilter] = useState(false);
    const [nftDropModal, setNftDropModal] = useState(false);
    const [nftSaleModal, setNftSaleModal] = useState(false);
    const [nftSoldModal, setNftSoldModal] = useState(false);


    const MoreSelectedBadge = ({ items }) => {

        const title = items.join(", ");
        const length = items.length;
        const label = `+ ${length} more`;

        return (
            <div className='moreSelectText' title={title}>
                {label}
            </div>
        );
    };


    const MultiValue = ({ index, getValue, ...props }) => {
        const maxToShow = 3;
        const overflow = getValue()
            .slice(maxToShow)
            .map((x) => x.label);

        return index < maxToShow ? (
            <components.MultiValue {...props} />
        ) : index === maxToShow ? (
            <MoreSelectedBadge items={overflow} />
        ) : null;
    };


    const handleChange = selected => {
        setSelected(selected);
    }
    const Option = props => {

        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };

    const nftDropHandler = event => {
        let eventTarget = event.currentTarget.dataset.type;
        let eventSold = event.currentTarget.dataset.sold;
        if (eventTarget == 'NFT-Drop') {
          setNftDropModal(!nftDropModal);
          if (eventSold == 'true') {
            setNftSoldModal(true);
          }
        } else if (eventTarget == 'For-Sale' || eventTarget == 'Recent-Transaction') {
          setNftSaleModal(!nftSaleModal);
        }
    
      }
    

    return (
        <Container>
            <div className='nftsub'>
                <h1>For Sale</h1>
                {forsaleList.length > 0 ?
                    <>
                        <div className='nftdrop__serial'>
                            <div className='nftdrop__serial__selection'>
                                <Form.Label>Series Type</Form.Label>
                                <Select
                                    isMulti
                                    name="colors"
                                    options={seriestype}
                                    className="multiSelectClass"
                                    classNamePrefix="select"
                                    components={{ Option, MultiValue }}
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    allowSelectAll={true}
                                    value={selected}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='nftdrop__serial__supplyleft'>
                                <p>NFT Supply: <span>417</span></p>
                                <p>NFT Left: <span>200</span></p>
                            </div>
                        </div>
                        <div className='nftaskingprice'>
                            <Form.Label>Asking Price (ETH)</Form.Label>
                            <div className='nftaskingprice__inner'>
                                <div className='priceSelectionnft'>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select</option>
                                        <option value="1">Less Than</option>
                                        <option value="2">Equal to</option>
                                        <option value="3">More Than</option>
                                    </Form.Select>
                                </div>
                                <div className='nftpriceask'>
                                    <Form.Control
                                        placeholder="Price"
                                        aria-describedby="price"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='nftdrop__searchserial'>

                            <Form.Group className="mb-0 position-relative" controlId="searchSerialnbr">
                                <Form.Label>Search Serial Number</Form.Label>
                                <InputGroup.Text id="searchSerial"><i className="fas fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search"
                                    aria-describedby="searchSerial"
                                />
                                <Button variant="link" className='p-0' onClick={() => setSearchFilter(!searchFilter)}> <Image src={filterIcon} alt="filter" /> </Button>
                            </Form.Group>
                            <p>From 00001 to 10000, &nbsp; From 00001 to 10000, &nbsp; From 00001 to 10000</p>
                        </div>
                        {/* Seal Attribute */}
                        {searchFilter &&
                            <SealAttributes />
                        }
                        <div className="nftType__carousel">

                            <div className='nftDrop__nfts'>
                                <Row className='row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2'>
                                    {forsaleList &&
                                        forsaleList.map((item) => (
                                            <Col>

                                                <NftTypeBox
                                                    item={item}
                                                    nftDropHandler={nftDropHandler}
                                                    type="For-Sale"
                                                />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </div>





                        </div>
                    </>
                    : <NoTicketHolder icon={iconnoforSale} text="No NFT for sale in the secondary market" />}
            </div>


            {/* For Sale and Recent Transactions Modal */}
            <Modal
                size="lg"
                centered
                show={nftSaleModal}
                onHide={() => setNftSaleModal(false)}
                className="nftDetailModal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        NFT DETAILS
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>

                    <div className='ticketDetail'>
                        <div className='ticketDetail__img'>
                            <Image src={nftDummy} alt="ticket detail" />
                        </div>
                        <div className='ticketDetail__form'>
                            <div className='ticketDetail__data'>
                                <h4>General Attributes</h4>
                                <div className='d-sm-flex'>
                                    <Form.Group className=" seriestypeattr" controlId="seriesTypem">
                                        <Form.Label>Series Type</Form.Label>
                                        <Form.Control type="text" value="Community" />
                                    </Form.Group>
                                    <Form.Group className="mb-0 seriesnbr" controlId="seriesnumberm">
                                        <Form.Label>Serial Number</Form.Label>
                                        <Form.Control type="number" value="02202" />
                                    </Form.Group>
                                </div>
                            </div>
                            <div className='ticketDetail__data sealAttributeData'>
                                <h4>Seal Attributes</h4>
                                <Row>
                                    <Col sm={4}>
                                        <Form.Group className=" inputgrp" controlId="seriesTypem">
                                            <Form.Label>Seal Color</Form.Label>
                                            <Form.Control type="text" value="Yellow" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group className=" inputgrp" controlId="seriesnumberm">
                                            <Form.Label>Skin color</Form.Label>
                                            <Form.Control type="text" value="Blue" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={4}>
                                        <Form.Group className=" inputgrp" controlId="seriesTypem">
                                            <Form.Label>Eye</Form.Label>
                                            <Form.Control type="text" value="VR Goggle" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group className=" inputgrp" controlId="seriesnumberm">
                                            <Form.Label>Headgear</Form.Label>
                                            <Form.Control type="text" value="Gentleman" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={4}>
                                        <Form.Group className=" inputgrp" controlId="seriesnumberm">
                                            <Form.Label>Mouth</Form.Label>
                                            <Form.Control type="text" value="Tobacco Pipe" />
                                        </Form.Group>
                                    </Col>
                                </Row>


                            </div>

                            <div className='marketStatus'>
                                <h5>Market Status</h5>
                                <p>This NFT is currently owned by address <span>0x1232423</span> </p>
                                <p>This NFT is currently for sale in the secondary market for <span>1.2 ETH</span></p>
                                <p><span>5</span> Bids on this NFT</p>
                            </div>

                            <div className='nfttransactionhistory'>
                                <h5>Transaction History</h5>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Amount (ETH)</th>
                                            <th>Value (USD)</th>
                                            <th>From</th>
                                            <th>To</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Apr 18 2022</td>
                                            <td>0.5</td>
                                            <td>$200</td>
                                            <td>0x3231sa</td>
                                            <td>0x42323a</td>
                                        </tr>
                                        <tr>
                                            <td>Apr 18 2022</td>
                                            <td>0.4</td>
                                            <td>$200</td>
                                            <td>0x93434</td>
                                            <td>0x3231sa</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </Container>
    )
}

export default ForSale