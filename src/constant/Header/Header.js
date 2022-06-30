
import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 70);
        })

    }, [])

    return (
        <Navbar expand="lg" fixed="top" className={scroll ? 'navbarScrolled' :''}>
            <Container>
                <Link to="/" className='navbar-brand'><Image src={Logo} /></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="about" className='nav-link'>About</Link>
                        <Link className='nav-link' to="nft-member">NFT Member</Link>
                    </Nav>
                    <Button variant="primary">Sign UP/Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header