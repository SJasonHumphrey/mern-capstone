import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions';
import {useHistory} from 'react-router-dom';

const Footer = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    const handleLogout = () => {
        dispatch(logout())
        history.push('/')

    }
    
    return (
        <>
        <Container fluid className="footer-layout">
            <Row className="my-4">
                <Col sm={12} md={6} className="d-flex  flex-column justify-content-center align-items-center ">
                    <p className="pt-3 mono-font">&#123;Copyright:Team Async 2021&#125;</p>
                    <button className="mono-font logout-button" onClick={handleLogout}>logout</button>
                </Col>

                <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center pt-3 mono-font">
                <p>Built By:</p>
                <a href="https://github.com/SJasonHumphrey"><p>&#123;SJasonHumphrey&#125;</p></a>
                <a href="https://github.com/SJasonHumphrey"><p>&#123;gisselleroldan&#125;</p></a>
                {/* <p>&#123;Gisselle:&#125;</p> */}
                <a href="https://github.com/Vlcgreen"><p>&#123;Vlcgreen&#125;</p></a>
                <a href="https://github.com/EC-Carter"><p>&#123;EC-Carter&#125;</p></a>
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Footer
