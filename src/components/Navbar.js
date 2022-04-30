import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <h3 className='name'>felix<span>fernando.</span></h3>
            <li className='nav-links'>
                <a href='#about' className='links'><h3>about<span>me</span></h3></a>
                <a href='#contact' className='links'><h3>contact</h3></a>
                <a href="#work" className='btn-orange'><h3>work</h3></a>
            </li>
        </header>
    )
}

export default Navbar