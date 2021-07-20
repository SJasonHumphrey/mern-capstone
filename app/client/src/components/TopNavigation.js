import React from 'react'
import './index.css';
import logo from './assets/logo.png'



export default function TopNavigation() {
    return (
        <div>
            <div className="mainheader">
                <div className="right">
                    <img className="logo" src={logo} alt="logo"/>
                    <div className="text">
                        <h2>Team Async</h2>
                    </div>

                </div>
                <div>
                    <br />
                    <div className="buttons">
                        <a target="_blank" href="https://codepen.io/accounts/signup/user/free"><button className="Topbutton2">Sign Up</button></a>
                        <a target="_blank" href="https://codepen.io/login"><button className="Topbutton1">Log In</button></a>

                    </div>
                </div>
            </div>
        </div>
    )
}