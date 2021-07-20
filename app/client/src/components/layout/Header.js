import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import {Navbar,Nav,Offcanvas} from 'react-bootstrap'

const Header = () => {

    const [visible, setVisible] = useState(false)

    const handleClose = () => setVisible(false)
    const handleShow = () => setVisible(true)
    return (
        <>
    
        <Navbar collapseOnSelect expand="lg" className="footer-layout">
            <Navbar.Brand className="logo-top">
            <Nav.Link as={Link} to="/"><img src="images/logo2.png" className="rem5"/></Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar"className="me-3"/>
            <Navbar.Collapse id="main-navbar">
                <Nav className=" ms-auto">
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to='/home'>Dashboard</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link  onClick={handleShow}>Study Tools</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link as={Link} to=''></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        <Offcanvas show={visible} onHide={handleClose} placement={'top'} >
            <Offcanvas.Header closeButton className="offCanvasColor">
                <Offcanvas.Title>Study Tools</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanvasColor">
                <Navbar>
                <Nav>
                    <Nav.Item>
                    <Nav.Link as={Link} to="/login" onClick={handleClose} className="d-flex flex-column justify-content-center align-items-center rem3 rem12-w "><img src="images/color/keyboard.png" height="50px"/>Typing Practice</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose} className="d-flex flex-column justify-content-center align-items-center rem3 rem12-w"><img src="images/color/laptopcoding.png" height="50px"/>Code Pen</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose} className="d-flex flex-column justify-content-center align-items-center rem3 rem12-w"><img src="images/color/language.png" height="50px"/>Flash Cards</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose} className="d-flex flex-column justify-content-center align-items-center rem3 rem12-w"><img src="images/color/writing-code.png" height="50px"/>Quizzes</Nav.Link>
                    </Nav.Item>
                    

                </Nav>
                </Navbar>

            </Offcanvas.Body>

        </Offcanvas>
        
        
        
        </>
    )
}

export default Header
