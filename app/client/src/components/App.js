import React from 'react';
import {Card,Button,Container,Row,Col} from 'react-bootstrap';


function App() {

  return (
    <Container fluid className="">
    <Row className="">
      <Col sm={12} md={8}>
        <div className="d-flex flex-column justify-content-center align-items-center full-height ">
          <img src="test.png"  className="rem7" height=""/>
          <h3>Worlds Best Coding Study Tool</h3>
      <p className="text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <img src="test.png"  className="rem7" height=""/>
      </div>
      </Col>
      <Col>
      <div className="d-flex flex-column justify-content-center align-items-center  full-height">
      <Button size="lg" variant="outline-dark" className="rounded-0">Make your study time count</Button>
      </div>
      </Col>
      
    
    </Row>
   
   
    
    </Container>
  );
}

export default App;
