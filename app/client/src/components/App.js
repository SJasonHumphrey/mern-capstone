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
        <h3 className="mono-font p-3">World's Best Coding Study Tool</h3>
        Welcome to Coding Buddy! Here you will find tools to up your HTML, CSS, and Javascript game. Features that we currently offer are: a code-centered typing test, customizable flashcards, a Code Pen for testing and showcasing code snippets, quizzes to test your knowledge, and a resources page to keep your Google-searching to a minimum. We hope you enjoy our site. Happy coding!
        </p>
        <Button size="lg" variant="outline-dark" className="rounded-0 mb-5 mono-font">Make your study time count</Button>
        </div>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
