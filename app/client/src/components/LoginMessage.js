import React from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const LoginMessage = () => {



    return (
        <>
        <Container className=" d-flex align-items-center justify-content-center">
        
        <div className="home-card bg-main d-flex flex-column align-items-center justify-content-center mono-font drop-shadow text-center">
            <h2 >Please login to see this page</h2>
            <p className="p-4 fs-5"> If you do not have an account you can create one <Link to="/register" className="login-link">here</Link></p>

        </div>
        </Container>
        
        </>
        
    )
}

export default LoginMessage