
import React, { useEffect } from 'react'
import { Container, Nav, Navbar, Image, Button } from 'react-bootstrap'
import Logo from '../../assets/img/Logo.png'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const { pathname, key, hash } = useLocation();

    useEffect(() => {
        if (hash === '') {
            window.scrollTo(0, 0);
        } else {
            setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView()
                }
            }, 0)
        }
    }, [pathname, hash, key]);

    return (
        <Navbar expand="lg" fixed={`${pathname == '/' ? 'top' : 'static'}`} className={pathname.includes('/for-sale') || pathname.includes('/nft-drop') || pathname.includes('/past-transaction') || pathname.includes('/list-of-ticket-holder') ? 'navbarchildstyle' : null}>
            <Container>
                {
                    pathname.includes('/for-sale') ||
                        pathname.includes('/nft-drop') ||
                        pathname.includes('/past-transaction') ||
                        pathname.includes('/list-of-ticket-holder')
                        ?
                        <Link to={`/nft-member#${pathname.replace('/nft-member/', '')}`} className='navbar-brand'>
                            <div className='backLink'>
                                <i className="fas fa-arrow-left"></i>
                                <span>Back</span>
                            </div>
                        </Link>
                        :
                        <Link to="/" className='navbar-brand'>
                            <Image src={Logo} />
                        </Link>
                }
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