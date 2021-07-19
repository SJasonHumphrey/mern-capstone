import React from 'react';
import {Link} from 'react-router-dom'
import {Grid, Menu} from 'semantic-ui-react'

const Header = () => {
    return (
        <>
    <Grid.Column floated='left' width={16}>
        <Menu secondary stackable borderless={true} className="">            
            <Menu.Item header>Team Async</Menu.Item>
            <Menu.Item as={Link} to='/login' position='right'>Login</Menu.Item>
            <Menu.Item as={Link} to='/register' >Register</Menu.Item>
            <Menu.Item as={Link} to='/home' >Home</Menu.Item>
        </Menu>
    </Grid.Column>
        
        
        
        </>
    )
}

export default Header
