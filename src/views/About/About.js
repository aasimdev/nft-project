import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import AboutImg from '../../assets/img/Mascot.png'
import Milestone from '../../assets/img/milestone.png'

const About = () => {
    return (
        <section className='aboutMain'>
            <Container>
                <Row>
                    <Col lg={{span: 7, order: 0}} xs={{span: 12, order: 1}}>
                        <div className='aboutContent'>
                            <h1>aBOUT US</h1>
                            <p>In years to come, future historians may very well give a one-word answer for wong’s rise to the summit.Well, one acronym, a dash and a number. Covid-19 . But that would only be a scratching the surface of the story. Unprecedented in scale, unlike any other challenge singapore <br />
                                Then came the decision that put wong at the forefront of the covid-19 battle. Then-Health minister gan kim yong nominated wong as someone he could work well with to be his fellow-co-chair, according to the straits time. Gan discuseed with senior minister teo chee hean, who took his request to Heng

                            </p>
                        </div>
                    </Col>
                    <Col lg={{span: 5, order: 1}} xs={{span: 12, order: 0}}>
                        <div className='aboutMan'>
                            <Image src={AboutImg} alt="about" />
                        </div>
                    </Col>
                </Row>
                <div className='milestoneMain'>
                    <h2>Milestone</h2>
                    <div className='milestoneImg'>
                        <Image src={Milestone} alt="milestone" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About