import React from 'react';
import {Grid}from 'semantic-ui-react'

const Footer = () => {
    return (
        <>
        <Grid padded={false} className='footer-grid'>
            <Grid.Column  width={8} textAlign='center' color="yellow" verticalAlign='middle'>
                <p>Copyright 2021 Team Ascync</p>
            </Grid.Column>
            <Grid.Column  width={8} textAlign='center' color="red" verticalAlign='middle'>
                <p>Copyright 2021 Team Ascync</p>
            </Grid.Column>

        </Grid>
        </>
    )
}

export default Footer
