import React, { useState, useEffect } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { ChevronDoubleRight } from 'react-bootstrap-icons';

const NftAttribute = () => {
    const [lockGeneral, setLockGeneral] = useState(false);
    const [lockSeal, setLockSeal] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [toggle, setToggle] = useState(false);

    const lockGeneralHandler = () => {
        setLockSeal(!lockSeal);
        setLockGeneral(!lockGeneral)
    }
    const lockSealHandler = () => {
        setLockGeneral(!lockGeneral);
        setLockSeal(!lockSeal)
    }

    const toggleHandler = () => {
        document.body.classList.toggle("overflow-hidden");
        setToggle(!toggle);
    }

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 991;


    return (
        <>
            {isMobile &&
                <div className={`mobileRightOpen ${toggle ? 'active' : ''}`} style={{ position: 'static' }}>
                    <Button onClick={toggleHandler}>
                        <span>Side Navigation</span> <ChevronDoubleRight />
                    </Button>
                </div>


            }
            {toggle &&
                <div className="mobileOverlay" onClick={toggleHandler}></div>
            }
            <div className={toggle ? 'nftintroAttri active' : 'nftintroAttri'}>
                <div className='nftintro__attribute'>
                    <div className='nftintro__attribute__header'>
                        <h4>General Attributes</h4>
                        <div className='nftintro__attribute__header__locker' onClick={() => { lockGeneralHandler() }}>
                            <i className={`fas ${lockGeneral ? 'fa-lock-open' : 'fa-lock'}`}></i>
                            <span>{lockGeneral ? 'Unlock' : 'Lock'}</span>
                        </div>
                    </div>
                    <div className={`nftintro__attribute__box ${lockGeneral ? 'lockatribute' : ''}`}>
                        <Form>
                            <Form.Group className="" controlId="serialType">
                                <Form.Label>Series Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Community</option>
                                    <option value="1">Advisory</option>
                                    <option value="2">Community</option>
                                    <option value="3">Home Services</option>
                                    <option value="4">Property</option>
                                    <option value="5">Renovation</option>
                                    <option value="6">E-commerce</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-0 position-relative" controlId="serialnumber">
                                <Form.Label>Serial Number</Form.Label>
                                <InputGroup.Text id="searchSerial"><i class="fas fa-search"></i></InputGroup.Text>
                                <Form.Control
                                    placeholder="Search"
                                    aria-describedby="searchSerial"
                                />
                            </Form.Group>
                            <p>From 7334  to 7666 </p>
                            <div className='text-center'>
                                <Button variant="secondary" type="submit">
                                    Search
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className='nftintro__attribute'>
                    <div className='nftintro__attribute__header'>
                        <h4>Seal Attributes</h4>
                        <div className='nftintro__attribute__header__locker' onClick={() => { lockSealHandler() }}>
                            <i className={`fas ${lockSeal ? 'fa-lock-open' : 'fa-lock'}`}></i>
                            <span>{lockSeal ? 'Unlock' : 'Lock'}</span>
                        </div>
                    </div>
                    <div className={`nftintro__attribute__box ${lockSeal ? 'lockatribute' : ''}`}>
                        <Form>
                            <Form.Group className="" controlId="serialType">
                                <Form.Label>Background Color</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">Teal</option>
                                    <option value="2">Green</option>
                                    <option value="3">Blue</option>
                                    <option value="4">Purple</option>
                                    <option value="5">Orange</option>
                                    <option value="6">Yellow</option>
                                    <option value="7">Pink</option>
                                    <option value="7">Red</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="" controlId="serialType">
                                <Form.Label>Skin color</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Select</option>
                                    <option value="1">Teal</option>
                                    <option value="2">Green</option>
                                    <option value="3">Blue</option>
                                    <option value="4">Purple</option>
                                    <option value="5">Orange</option>
                                    <option value="6">Yellow</option>
                                    <option value="7">Pink</option>
                                    <option value="7">Red</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="" controlId="serialType">
                                <Form.Label>Eye Wear</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Nil</option>
                                    <option value="1">VR Goggle</option>
                                    <option value="2">Square Sunglass</option>
                                    <option value="3">Aviator Sunglass</option>
                                    <option value="4">Riding Google</option>
                                    <option value="5">Shuttle Shades</option>
                                    <option value="6">Spectacle</option>
                                    <option value="7">Face Shield</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="" controlId="serialType">
                                <Form.Label>Head Gear</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Nil</option>
                                    <option value="1">Bandana Cap</option>
                                    <option value="2">Jungle Hat</option>
                                    <option value="3">Knight</option>
                                    <option value="4">Wig</option>
                                    <option value="5">Cowboy Hat</option>
                                    <option value="6">Safety Helmet</option>
                                    <option value="7">Gentleman</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-0" controlId="serialType">
                                <Form.Label>Mouth</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option>Nil</option>
                                    <option value="1">Stubble</option>
                                    <option value="2">Goatee</option>
                                    <option value="3">Cigar</option>
                                    <option value="4">Tobacco Pipe</option>
                                    <option value="5">Headset</option>
                                    <option value="6">Face Mask</option>
                                    <option value="7">Bandana Mask</option>
                                </Form.Select>
                            </Form.Group>
                            <div className='resetFIlter'>
                                Reset Filter
                            </div>
                            <div className='text-center'>
                                <Button variant="secondary" type="submit">
                                    Search
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NftAttribute