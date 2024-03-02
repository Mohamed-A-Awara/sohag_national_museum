import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import leftImg_news from '../Tools/Imgs/news_left.png'
import rightImg_news_1 from '../Tools/Imgs/News-right_1.png'
import rightImg_news_2 from '../Tools/Imgs/news_right_2.png'

function Home_News() {

    return (
        <>
            <section className='home-news'>
                <Container>
                <h2 className='text-center'>News & Activities</h2>
                    <hr className='line'></hr>
                    <Row>
                        <Col lg='6' md='12'>
                            <Card className='news-card pt-4'>
                                <Card.Img variant="top" src={leftImg_news} />
                                <Card.Body>
                                    <Card.Title className='news-card-title'>Opening</Card.Title>
                                    <Card.Text className='news-card-text'>
                                    The museum was opened on August 12, 2018 in the presence of Mr. Abdel Fattah El-Sisi, President of the Arab Republic of Egypt, Dr. Mostafa Madbouly, Prime Minister, and some ministers. The total cost of the museum amounted to 72 million pounds.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Row>
                                <Col lg='12'>
                                <div className='news-right pt-4 '>
                                    <div>
                                        <Image src={rightImg_news_1} className='rounded img-fluid'/>
                                    </div>
                                    <div className='news-right-data'>
                                        <h3>Educational</h3>
                                        <p>A lecture on the rights of people with disabilities in ancient Egypt</p>
                                    </div>
                                </div>
                                <hr></hr>

                                </Col>
                                <Col lg='12'>
                                    <div className='news-right'>
                                        <div>
                                            <Image src={rightImg_news_2} className='rounded img-fluid'/>
                                        </div>
                                        <div className='news-right-data'>
                                            <h3>Training</h3>
                                            <p>An educational symposium (a series of lectures entitled Museums and archaeological sites between reality and aspiration)</p>

                                        </div>
                                    </div>
                                    <hr></hr>
                                </Col>
                                <Col lg='12'>
                                    <div className='news-right'>
                                        <div>
                                            <Image src={rightImg_news_1} className='rounded img-fluid'/>
                                        </div>
                                        <div className='news-right-data'>
                                            <h3>Official visits</h3>
                                            <p>Director of the French Institute of Oriental Archaeology</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Home_News