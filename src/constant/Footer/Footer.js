import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Logo from '../../assets/img/Logo.png'
import { Discord, Twitter, EnvelopeFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footerContent'>
          <div className='footer__logo'>
            <Image src={Logo} alt="logo" />
          </div>
          <ul className='footer__links'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/nft-member">NFT MEMBER</Link>
            </li>
            <li>
              <a href="#">SIGN UP/LOGIN</a>
            </li>
          </ul>
          <ul className='footer__twidisema'>
            <li>
              <a href="#">
                <Discord color='#6652EC' />
                <span>/THISISNFT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter color='#6493EB' />
                <span>@THISISNFT</span>
              </a>
            </li>
            <li>
              <a href="#">
                <EnvelopeFill color='#363A4C' />
                <span>admin@THISISNFT.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='footerTerms'>
          <ul>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer