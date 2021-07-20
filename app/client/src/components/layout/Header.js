import React,{useState} from 'react';
import {Link} from 'react-router-dom'
//import {Grid, Menu} from 'semantic-ui-react';
import {Navbar,Nav,Offcanvas} from 'react-bootstrap'

const Header = () => {

    const [visible, setVisible] = useState(false)

    const handleClose = () => setVisible(false)
    const handleShow = () => setVisible(true)
    return (
        <>
    {/* <Grid.Column floated='left' width={16}>
        <Menu secondary stackable borderless={true} className="">            
            <Menu.Item header>Team Async</Menu.Item>
            <Menu.Item as={Link} to='/login' position='right'>Login</Menu.Item>
            <Menu.Item as={Link} to='/register' >Register</Menu.Item>
            <Menu.Item as={Link} to='/home' >Home</Menu.Item>
        </Menu>
    </Grid.Column> */}
        <Navbar collapseOnSelect expand="lg" className="footer-layout">
            <Navbar.Brand className="logo-top">
            <Nav.Link as={Link} to="/">Coding Buddy</Nav.Link>
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
            <Offcanvas.Header closeButton className="yellow">
                <Offcanvas.Title>Study Tools</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="yellow">
                <Nav>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                    <Nav.Link as={Link} to="/login" onClick={handleClose}>Login</Nav.Link>
                    </Nav.Item>

                </Nav>

            </Offcanvas.Body>

        </Offcanvas>
        
        
        
        </>
    )
}

export default Header
