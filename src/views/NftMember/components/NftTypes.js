import React, { useState } from 'react'
import { Form, Image, InputGroup, Modal, Row, Col, Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select, { components } from 'react-select';

import NftTypeBox from './NftTypeBox';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ChevronRight } from 'react-bootstrap-icons';
import { ChevronLeft } from 'react-bootstrap-icons';

// Dummy Data
import { seriestype, nftDropList, forsaleList, recentTransactions } from '../../../data/data';

import nftDummy from '../../../assets/img/greendummy-lg.jpg'
import NoNftRecentTrans from '../../NoContentExist/NoNftRecentTrans';
import NoNftForSale from '../../NoContentExist/NoNftForSale';
import NoNftDrop from '../../NoContentExist/NoNftDrop';

const NftTypes = () => {

  const [selected, setSelected] = useState([]);
  const [nftDropModal, setNftDropModal] = useState(false);
  const [nftSaleModal, setNftSaleModal] = useState(false);
  const [nftSoldModal, setNftSoldModal] = useState(false);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 1,
    nextArrow: <div className='slickactions'><ChevronRight /></div>,
    prevArrow: <div className='slickactions'><ChevronLeft /></div>,
    slidesPerRow: 2,
    centerMode: true,
  };



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
    <div className='nftTypes'>

      {/* NFT Drop */}
      <div className='nftType' id="nft-drop">
        <div className='nftType__title'>
          <h3>NFT drop</h3>
          <Link to="nft-drop">View More</Link>
        </div>
        {nftDropList.length > 0 ?
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
            <div className='nftdrop__searchserial'>

              <Form.Group className="mb-0 position-relative" controlId="searchSerialnbr">
                <Form.Label>Search Serial Number</Form.Label>
                <InputGroup.Text id="searchSerial"><i className="fas fa-search"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-describedby="searchSerial"
                />
              </Form.Group>
              <p>From 7334 to 7666</p>
            </div>

            <div className="nftType__carousel">
              <div className='showonlyavailable'>
                <Form.Group className="mb-0" controlId="available">
                  <Form.Check type="checkbox" label="Show Available NFT Only " />
                </Form.Group>
              </div>

              <Slider {...settings}>
                {nftDropList &&
                  nftDropList.map((item) => (
                    <NftTypeBox
                      item={item}
                      nftDropHandler={nftDropHandler}
                      type="NFT-Drop"
                    />
                  ))
                }
              </Slider>


            </div>
          </>
          : <NoNftDrop /> }
      </div>

      {/* For Sale */}
      <div className='nftType' id="for-sale">
        <div className='nftType__title'>
          <h3>For Sale</h3>
          <Link to="for-sale">View More</Link>
        </div>
        {forsaleList.length > 0 ?
          <>
            <div className='nftsale__instruction'>
              <p>Total NFT listed in the secondary market are  <span>300</span></p>
              <p>The price range is  <span>0.5 ETH to 1.2 ETH</span></p>
            </div>
            <div className="nftType__carousel">
              <Slider {...settings}>
                {forsaleList &&
                  forsaleList.map((item) => (
                    <NftTypeBox
                      item={item}
                      nftDropHandler={nftDropHandler}
                      type="For-Sale"
                    />
                  ))
                }
              </Slider>
            </div>
          </>
          : <NoNftForSale />}

      </div>


      {/* For Sale */}
      <div className='nftType' id="past-transaction">
        <div className='nftType__title'>
          <h3>Recent Transactions</h3>
          <Link to="past-transaction">View More</Link>
        </div>

        <div className='nftsale__instruction'>
          <p>Updated 1 minute ago</p>
        </div>

        <div className="nftType__carousel">
          {recentTransactions.length > 0 ?
            <Slider {...settings}>
              {recentTransactions &&
                recentTransactions.map((item) => (
                  <NftTypeBox
                    item={item}
                    nftDropHandler={nftDropHandler}
                    type="Recent-Transaction"
                  />
                ))
              }
            </Slider>
            : <NoNftRecentTrans />}
        </div>

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
                    <Form.Group className="mb-2 seriestypeattr" controlId="seriesTypem">
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
                      <Form.Group className="mb-2 inputgrp" controlId="seriesTypem">
                        <Form.Label>Seal Color</Form.Label>
                        <Form.Control type="text" value="Yellow" />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
                        <Form.Label>Skin color</Form.Label>
                        <Form.Control type="text" value="Blue" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-2 inputgrp" controlId="seriesTypem">
                        <Form.Label>Eye</Form.Label>
                        <Form.Control type="text" value="VR Goggle" />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
                        <Form.Label>Headgear</Form.Label>
                        <Form.Control type="text" value="Gentleman" />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
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
                  <Form.Group className="mb-2 seriestypeattr" controlId="seriesTypem">
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
                    <Form.Group className="mb-2 inputgrp" controlId="seriesTypem">
                      <Form.Label>Seal Color</Form.Label>
                      <Form.Control type="text" value="Yellow" />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
                      <Form.Label>Skin color</Form.Label>
                      <Form.Control type="text" value="Blue" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <Form.Group className="mb-2 inputgrp" controlId="seriesTypem">
                      <Form.Label>Eye</Form.Label>
                      <Form.Control type="text" value="VR Goggle" />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
                      <Form.Label>Headgear</Form.Label>
                      <Form.Control type="text" value="Gentleman" />
                    </Form.Group>
                  </Col>
                  <Col sm={4}>
                    <Form.Group className="mb-2 inputgrp" controlId="seriesnumberm">
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
    </div>

  )
}

export default NftTypes