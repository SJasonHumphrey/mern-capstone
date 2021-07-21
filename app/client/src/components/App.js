import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';



function App() {

  return (
    <Container fluid className="">
    <Row className="">
      <Col sm={12} md={6}>
        <div className="d-flex justify-content-center align-items-center full-height">
        <img src="images/color/study1.png" className="study-image" />
        </div>
      </Col>

      <Col>
        <div className="d-flex flex-column justify-content-center align-items-center full-height ">
        <p className="text-center p-5">
        <h3 className="mono-font p-3">Worlds Best Coding Study Tool</h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button size="lg" variant="outline-dark" className="rounded-0 mb-5 mono-font">Make your study time count</Button>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
