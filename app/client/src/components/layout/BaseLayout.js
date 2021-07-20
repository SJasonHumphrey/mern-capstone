import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'semantic-ui-react'

const BaseLayout = (props) => {
    return (
        <>
        
        
                <Header/>
                <div className='main' children={props.children}/>
                <div/>
                <Footer />

        
        
        </>
    )
}

export default BaseLayout
