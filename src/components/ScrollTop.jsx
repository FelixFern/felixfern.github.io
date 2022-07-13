import React, { useState, useContext, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { yOffsetContext } from '../context/global'


import './ScrollTop.css'

function ScrollTop() {
    const { yOffset, setYOffset } = useContext(yOffsetContext) 
    const [ showButton, setShowButton] = useState(false)

    const scrollTop = (() => {
        window.scrollTo(0,0)
    })

    useEffect(() => {
        yOffset == 0 ? setShowButton(false) : setShowButton(true) 
    }, [yOffset])
    
    return (
        <div className={showButton ? "scroll-top-parent show" : "scroll-top-parent hide"} onClick={() => scrollTop()}>
            <FaArrowUp className={showButton ? "icon show" : "icon hide"}></FaArrowUp>
        </div>
    )
}

export default ScrollTop