import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container fluid className="footer-layout">
            <Row className="">
                <Col sm={12} md={6}>
                    <p className="d-flex justify-content-center align-items center pt-2">Copyright Team Async 2021</p>
                </Col>
                <Col sm={12} md={6}>
                <p className="d-flex justify-content-center align-items center pt-2">some other copy here</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Footer
