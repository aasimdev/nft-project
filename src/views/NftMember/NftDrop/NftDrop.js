import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Image, Modal } from 'react-bootstrap'

import filterIcon from '../../../assets/img/filter.png'
import NftTypeBox from '../components/NftTypeBox';

import SealAttributes from '../components/SealAttributes';

import Select, { components } from 'react-select';

import { seriestype, nftDropList } from '../../../data/data';
import NoNftDrop from '../../NoContentExist/NoNftDrop';

import nftDummy from '../../../assets/img/greendummy-lg.jpg'


const NftDrop = () => {
  const [selected, setSelected] = useState([]);
  const [searchFilter, setSearchFilter] = useState(false);
  const [available, setAvailable] = useState()
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

  const availableHandleChange = (event) => {
    console.log(event);
  }


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
        <h1>NFT drop</h1>
        {nftDropList.length > 0 ?
          <>
            <div className='nftdrop__serial mb-4'>
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
              <div className='showonlyavailable'>
                <Form.Group className="mb-0" controlId="available">
                  <Form.Check type="checkbox" label="Show Available NFT Only " onChange={availableHandleChange} />
                </Form.Group>
              </div>

              <div className='nftDrop__nfts'>
                <Row className='row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2'>
                  {nftDropList &&
                    nftDropList.map((item) => (
                      <Col>
                        <NftTypeBox
                          item={item}
                          nftDropHandler={nftDropHandler}
                          type="NFT-Drop"
                        />
                      </Col>
                    ))
                  }
                </Row>
              </div>





            </div>
          </>
          : <NoNftDrop />}

      </div>


      {/* For NFT Drop Modal */}
      <Modal
        size="lg"
        centered
        show={nftDropModal}
        onHide={() => setNftDropModal(false)}
        className="nftDetailModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            TICKET DETAILS
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <Form>
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

                {nftSoldModal ?
                  <>
                    <Button variant="secondary" disabled type="submit">
                      Sold
                    </Button>
                    <div className='nftsoldbtns'>
                      <a href="#">View in Opensea</a>
                      <a href="#">View in Etherscan</a>
                    </div>
                  </>
                  :
                  <>
                    <div className='ticketDetailPrice'>
                      <p>Price: <span>0.1 ETH</span> + Gas </p>
                    </div>
                    <Button variant="secondary" type="submit">
                      Mint Ticket
                    </Button>
                  </>
                }

              </div>
            </div>
          </Form>
        </Modal.Body>

      </Modal>
    </Container>
  )
}

export default NftDrop