import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'semantic-ui-react'

const BaseLayout = (props) => {
    return (
        <>
        
        
            {/* <Grid.Row color=""> */}
                <Header/>
            {/* </Grid.Row> */}

            {/* <Grid.Row color="" centered textAlign='left'> */}
            {/* <Grid > */}
                <div className='main' children={props.children}/>
                
                 
                <div/>
            {/* </Grid> */}
            {/* </Grid.Row> */}

            {/* <Grid.Row color="" > */}
                <Footer />
            {/* </Grid.Row > */}
        
        
        </>
    )
}

export default BaseLayout
