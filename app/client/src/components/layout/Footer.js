import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
        <Container fluid className="footer-layout">
            <Row className="my-4">
                <Col sm={12} md={6} className="d-flex justify-content-center align-items-center ">
                    <p className="pt-3 mono-font">&#123;Copyright:Team Async 2021&#125;</p>
                </Col>
                <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center pt-3 mono-font">
                <p>Built By</p>
                <p>&#123;Jason:&#125;</p>
                <p>&#123;Gisselle:&#125;</p>
                <p>&#123;Victoria:&#125;</p>
                <p>&#123;Carol:&#125;</p>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Footer
