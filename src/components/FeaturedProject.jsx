import React from 'react'
import { SiReact, SiFigma, SiJavascript, SiFlutter, SiFirebase, SiHtml5, SiCss3, SiStrapi, SiNodedotjs, SiExpress, SiTailwindcss, SiFlask , SiGithub, SiGooglesheets, SiSass, SiNextdotjs } from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi'

import Carousel from './Carousel'
import './FeaturedProject.css'


function FeaturedProject({ title, subtitle, desc, stacks, images, repo, project }) {
    return (
        <div className='featured-project-parent' data-aos='zoom-in-right'>
            <div className='left'>
                <div className="header">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
                <p>{desc}</p>
                <div className="stacks">
                    <h3>Technology Used : </h3>
                    {stacks.map((stack, key) => {
                        if(stack.toLowerCase() == "react") return (<SiReact key={key} className='stack-icon'></SiReact>)
                        else if(stack.toLowerCase() == "figma") return (<SiFigma key={key} className='stack-icon'></SiFigma>)
                        else if(stack.toLowerCase() == "flutter") return (<SiFlutter key={key} className='stack-icon'></SiFlutter>)
                        else if(stack.toLowerCase() == "firebase") return (<SiFirebase key={key} className='stack-icon'></SiFirebase>)
                        else if(stack.toLowerCase() == "js") return (<SiJavascript key={key} className='stack-icon'></SiJavascript>)
                        else if(stack.toLowerCase() == "html") return (<SiHtml5 key={key} className='stack-icon'></SiHtml5>)
                        else if(stack.toLowerCase() == "css") return (<SiCss3 key={key} className='stack-icon'></SiCss3>)
                        else if(stack.toLowerCase() == "strapi") return (<SiStrapi key={key} className='stack-icon'></SiStrapi>)
                        else if(stack.toLowerCase() == "node") return (<SiNodedotjs key={key} className='stack-icon'></SiNodedotjs>)
                        else if(stack.toLowerCase() == "express") return (<SiExpress key={key} className='stack-icon'></SiExpress>)
                        else if(stack.toLowerCase() == "tailwind") return (<SiTailwindcss key={key} className='stack-icon'></SiTailwindcss>)
                        else if(stack.toLowerCase() == "flask") return (<SiFlask key={key} className='stack-icon'></SiFlask>)
                        else if(stack.toLowerCase() == "gsheets") return (<SiGooglesheets key={key} className='stack-icon'></SiGooglesheets>)
                        else if(stack.toLowerCase() == "sass") return (<SiSass key={key} className='stack-icon'></SiSass>)
                        else if(stack.toLowerCase() == "next") return (<SiNextdotjs key={key} className='stack-icon'></SiNextdotjs>)
                    })}
                </div>
                <div className='links'>
                    {repo !== '' ? (
                        <>
                        <a href={repo}><h3><SiGithub></SiGithub>Repository</h3></a>
                        </>
                    ):(
                        <></>
                    )}
                    {project !== '' ? (
                        <a href={project}><h3><BiLinkExternal></BiLinkExternal>Project</h3></a>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className='right'>
                <Carousel images={images}></Carousel>
            </div>
        </div>
    )
}

export default FeaturedProject