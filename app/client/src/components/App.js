import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'



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
        <p className="text-center px-5">
        <h3 className="mono-font p-3">World's Best Coding Study Tool</h3>
        Welcome to Coding Buddy! Here you will find tools to up your HTML, CSS, and Javascript game. We currently offer a code-centered typing test, customizable flashcards, a Code Pen for testing and showcasing code snippets, quizzes to test your knowledge, and a resources page to help you make the most of the tools the web has to offer. Happy coding!<span className="small-font">(Flashcards and Dashboard features available with account)</span>
        </p>
        <Button as={Link} to='/register' size="lg" variant="outline-dark" className="rounded-0 my-3 mono-font study-time">Make your study time count</Button>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
