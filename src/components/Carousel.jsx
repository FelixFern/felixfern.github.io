import React, { useEffect } from 'react'
import { useState } from 'react'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

import './Carousel.css'

function Carousel({images}) {

    const [ xOffset, setXOffset ] = useState(0)

    const moveLeft = () => {
        xOffset == 0 ? setXOffset(0) : setXOffset(xOffset + 43)
    }
    const moveRight = () => {
        xOffset <= -(images.length - 1) * 43 ? setXOffset(0) : setXOffset(xOffset - 43)
    }

    return (
        <div className='carousel-parent'>
            <div className='images-list'>
                {images.map((image, key) => (
                    <img style={{ transform: `translateX(${xOffset}vw)`}} src={image} key={key}></img>
                ))}
            </div>
            <div className="thumb">
                <h1 onClick={() => {moveLeft()}}><AiOutlineLeft/></h1>
                <h1 onClick={() => {moveRight()}}><AiOutlineRight/></h1>
            </div>
        </div>
    )
}

export default Carousel