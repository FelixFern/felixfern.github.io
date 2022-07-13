import React, { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [hamburger, setHamburger] = useState(false)
    return (
        <header>
            <h3 className='name'>felix<span>fernando.</span></h3>
            <div className='hamburger' onClick={() => {
                if(hamburger) {
                    setHamburger(false)
                } else {
                    setHamburger(true)
                }
            }}>
                <div className={hamburger ? 'line1 phase-1' : 'line1'}></div>
                <div className={hamburger ? 'line2 phase-2' : 'line2'}></div>
                <div className={hamburger ? 'line3 phase-3' : 'line3'}></div>
            </div>
            <div className='nav-links'  >
                <a href='#about' className={hamburger ? 'links display-block' : 'links display-none'}><h3>about<span>me</span></h3></a>
                <a href='#contact' className={hamburger ? 'links display-block' : 'links display-none'}><h3>contact</h3></a>
                <a href="#works" className={hamburger ? 'btn-orange links display-block' : 'btn-orange links display-none'}><h3>work</h3></a>
            </div>
        </header>
    )
}

export default Navbar