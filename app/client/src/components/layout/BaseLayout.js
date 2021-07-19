import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Grid} from 'semantic-ui-react'

const BaseLayout = (props) => {
    return (
        <>
        <Grid columns={16}>
            <Grid.Row color="">
                <Header/>
            </Grid.Row>

            <Grid.Row color="" centered textAlign='left'>
                <div className='main' children={props.children}/>
                
                <div/>
            </Grid.Row>

            <Grid.Row color="" >
                <Footer />
            </Grid.Row >
        </Grid>
        </>
    )
}

export default BaseLayout
