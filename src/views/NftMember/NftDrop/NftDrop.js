import React, { useState } from 'react'
import { Form, InputGroup, Container, Row, Col, Button, Image } from 'react-bootstrap'

import filterIcon from '../../../assets/img/filter.png'
import NftTypeBox from '../components/NftTypeBox';

import SealAttributes from '../components/SealAttributes';

import Select, { components } from 'react-select';

import { seriestype, nftDropList } from '../../../data/data';
import NoNftDrop from '../../NoContentExist/NoNftDrop';


const NftDrop = () => {
  const [selected, setSelected] = useState([]);
  const [searchFilter, setSearchFilter] = useState(false);
  const [available, setAvailable] = useState()


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
                <Row className='row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-12'>
                  {nftDropList &&
                    nftDropList.map((item) => (
                      <Col>
                        <NftTypeBox item={item} />
                      </Col>
                    ))
                  }
                </Row>
              </div>





            </div>
          </>
          : <NoNftDrop />}

      </div>
    </Container>
  )
}

export default NftDrop