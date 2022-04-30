import React from 'react'
import './SocialMedia.css'

import {FaLinkedin, FaInstagram, FaGithub, FaTwitter} from 'react-icons/fa'

function SocialMedia() {
    return (
        <div className='social-media-links'>
            <div className='line'></div>
            <div className='social-media-l'>
                <a href='https://github.com/FelixFern'><FaGithub></FaGithub></a>
                <a><FaLinkedin></FaLinkedin></a>
                <a><FaInstagram></FaInstagram></a>
                <a><FaTwitter></FaTwitter></a>
            </div>
        </div>
    )
}

export default SocialMedia