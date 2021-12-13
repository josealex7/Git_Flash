import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../styles/Navbar.css'


export default class Navbar extends Component {
    render() {
        return (
            <div className='Routerdom'>
                <header className='headerNavPrincipal'>
                    <nav className='NavHeader'>
                    <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/45/000000/external-movie-cinema-icongeek26-linear-colour-icongeek26.png"/>
                        <Link className='link' to="/signup">Sign Up</Link>
                        <Link className='link' to="/">Log in</Link>
                    </nav>
                </header>
            </div>
        )
    }
}
