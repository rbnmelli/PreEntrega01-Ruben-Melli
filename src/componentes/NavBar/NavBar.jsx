import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>RBN-GAMES</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>PS</li>
                    <li>Xbox</li>
                    <li>Nintendo</li>
                    <li>PC</li>
                </ul>
            </nav>
            <CardWidget />

        </header>
    )
}

export default NavBar