import React from 'react';
import {Container} from 'react-bootstrap'

const Home = () => {



    return (
        <>
        <Container className=" d-flex align-items-center justify-content-center">
        
        <div className="home-card bg-main d-flex flex-column align-items-center justify-content-center mono-font drop-shadow text-center">
            <h2>Thanks For Loggin In!</h2>
            <p className="p-4 fs-5"> You now have access to premium features.Click on the Study Tool link above to get started.</p>

        </div>
        </Container>
        
        </>
        
    )
}

export default Home

