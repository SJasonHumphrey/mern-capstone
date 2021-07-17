import React from 'react';
import {Link} from 'react-router-dom'
import {Grid, Menu} from 'semantic-ui-react'

const Header = () => {
    return (
        <>
        <Menu secondary stackable borderless={true}>
            <Menu.Item header>Team Async</Menu.Item>
            <Menu.Item as={Link} to='/login' position='right'>Login</Menu.Item>
            <Menu.Item as={Link} to='/register' >Register</Menu.Item>
            <Menu.Item as={Link} to='/home' >Home</Menu.Item>
        </Menu>
        
        
        
        </>
    )
}

export default Header
