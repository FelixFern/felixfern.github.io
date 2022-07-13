import React from 'react'
import './SocialMedia.css'

import {FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

function SocialMedia() {
    return (
        <div className='social-media-links'>
            <div className='line'></div>
            <div className='social-media-l'>
                <a href='https://github.com/FelixFern'><FaGithub></FaGithub></a>
                <a href='https://www.linkedin.com/in/felix-fern/'><FaLinkedin></FaLinkedin></a>
                <a href='https://www.instagram.com/felixfern_/'><FaInstagram></FaInstagram></a>
                <a href='https://www.youtube.com/channel/UCK-KH0huKdyiDQUvQZQyy_A'><FaYoutube></FaYoutube></a>
            </div>
        </div>
    )
}

export default SocialMedia