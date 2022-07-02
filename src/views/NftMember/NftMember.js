import React, { useEffect, useState } from 'react'
import { Container, Button, Modal, Image } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

import metamaskCoin from '../../assets/img/metamask.png'
import trustCoin from '../../assets/img/trust.png'
import coinbaseCoin from '../../assets/img/coinbase.png'
import ConnectWallet from './components/ConnectWallet'
import NftMemberContent from './components/NftMemberContent'
import NftIntro from './components/NftIntro'
import NftOverallStats from './components/NftOverallStats'
import NftTypes from './components/NftTypes'

const NftMember = () => {
  const [modalShow, setModalShow] = useState(false);
  const [connect, setConnect] = useState(false);

  const connectWalletHandler = () => {
    setModalShow(!modalShow);
    localStorage.setItem('connectWallet', true);
  }

  const disconnectHandler = () => {
    localStorage.setItem('connectWallet', false);
    setConnect(false)
  }

  useEffect(() => {
    var localConnect = localStorage.getItem('connectWallet');
    if (localConnect == 'true') {
      setConnect(true);
    }

  }, [modalShow, connect])

  return (
    <section className='nftmember'>
      <Container>
        <div className='nftmember__header'>
          <Button variant='secondary' onClick={() => setModalShow(true)}><i className="fas fa-wallet"></i> <span>Connect Crypto Wallet</span></Button>
          {connect &&
            <Button className='disconn' onClick={() => { disconnectHandler() }}>Disconnect Wallet</Button>
          }
        </div>
        {connect &&
          <ConnectWallet />
        }

        <NftMemberContent />
        <NftIntro />
        <NftOverallStats />
        <NftTypes />
      </Container>

      <Outlet />

      <Modal
        size="lg"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="nftConnectModal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Connect Crypto Wallet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <div className='connectModalWallet'>
            <p>Connect with one of our available wallet providers</p>
            <div className='walletBadges'>
              <div className="coinBadge" onClick={() => { connectWalletHandler() }}>
                <div className='coinBadge__img'>
                  <Image src={metamaskCoin} alt="coin" />
                </div>
                <span>Metamask</span>
              </div>
              <div className="coinBadge" onClick={() => { connectWalletHandler() }}>
                <div className='coinBadge__img'>
                  <Image src={trustCoin} alt="coin" />
                </div>
                <span>Trust </span>
              </div>
              <div className="coinBadge" onClick={() => { connectWalletHandler() }}>
                <div className='coinBadge__img'>
                  <Image src={coinbaseCoin} alt="coin" />
                </div>
                <span>Coinbase </span>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <p>Do Not Have a Crypto Wallet?</p>
          <Button variant='secondary'>Learn More</Button>
        </Modal.Footer>
      </Modal>

    </section>
  )
}

export default NftMember