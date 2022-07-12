import React from 'react'
import {SiReact, SiFigma, SiJavascript, SiFlutter, SiFirebase, SiHtml5, SiCss3, SiStrapi} from 'react-icons/si'
import Carousel from './Carousel'
import './FeaturedProject.css'


function FeaturedProject({ title, subtitle, desc, stacks, images, repo, project }) {
    return (
        <div className='featured-project-parent'>
            <div className='left'>
                <div className="header">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <p>{desc}</p>
                <div className="stacks">
                    <h3>Technology Used : </h3>
                    {stacks.map((stack, key) => {
                        if(stack.toLowerCase() == "react") return (
                        <SiReact className='stack-icon'></SiReact>)
                        else if(stack.toLowerCase() == "figma") return (<SiFigma className='stack-icon'></SiFigma>)
                        else if(stack.toLowerCase() == "flutter") return (<SiFlutter className='stack-icon'></SiFlutter>)
                        else if(stack.toLowerCase() == "firebase") return (<SiFirebase className='stack-icon'></SiFirebase>)
                        else if(stack.toLowerCase() == "js") return (<SiJavascript className='stack-icon'></SiJavascript>)
                        else if(stack.toLowerCase() == "html") return (<SiHtml5 className='stack-icon'></SiHtml5>)
                        else if(stack.toLowerCase() == "css") return (<SiCss3 className='stack-icon'></SiCss3>)
                        else if(stack.toLowerCase() == "strapi") return (<SiStrapi className='stack-icon'></SiStrapi>)
                    })}
                </div>
                <div className='links'>
                    <a href={repo}><h3>Repository</h3></a>
                    <a href={project}><h3>Project</h3></a>
                </div>
            </div>
            <div className='right'>
                <Carousel images={images}></Carousel>
            </div>
        </div>
    )
}

export default FeaturedProject