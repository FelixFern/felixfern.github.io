import React, { useEffect, useState } from 'react'
import { SiReact, SiFigma, SiJavascript, SiFlutter, SiFirebase, SiHtml5, SiCss3, SiStrapi, SiPython, SiGithub } from 'react-icons/si'
import { BiLinkExternal } from 'react-icons/bi'
import AOS from 'aos';

import './ProjectBox.css'
import 'aos/dist/aos.css';

function ProjectBox(props) {
    let stacks = props.stacks
    const [ color, setColor ] = useState('')
    
    useEffect(() => {
        if(props.type == 'Web Application' || props.type == 'Portofolio Website') setColor('green')
        else if(props.type == 'Flutter Application') setColor('red')
        else if(props.type == 'Python Script') setColor('orange')
        AOS.init()
    }, [])
    
    return (
        <div className={"project-main-box " + color} data-aos="zoom-in">
            <div className='content'>
                <div className='head'>
                    <h3>{props.type}</h3>
                    <div className='stacks'>
                        {stacks.map((stack,key) => {
                            if(stack.toLowerCase() == "react") return (<SiReact className='stack-icon'></SiReact>)
                            else if(stack.toLowerCase() == "figma") return (<SiFigma className='stack-icon'></SiFigma>)
                            else if(stack.toLowerCase() == "flutter") return (<SiFlutter className='stack-icon'></SiFlutter>)
                            else if(stack.toLowerCase() == "firebase") return (<SiFirebase className='stack-icon'></SiFirebase>)
                            else if(stack.toLowerCase() == "js") return (<SiJavascript className='stack-icon'></SiJavascript>)
                            else if(stack.toLowerCase() == "html") return (<SiHtml5 className='stack-icon'></SiHtml5>)
                            else if(stack.toLowerCase() == "css") return (<SiCss3 className='stack-icon'></SiCss3>)
                            else if(stack.toLowerCase() == "strapi") return (<SiStrapi className='stack-icon'></SiStrapi>)
                            else if(stack.toLowerCase() == "python") return (<SiPython className='stack-icon'></SiPython>)
                        })
                        }
                    </div>
                </div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div className='links'>
                    {props.repo !== '' ? (
                        <>
                        <a href={props.repo}><h3><SiGithub></SiGithub>Repository</h3></a>
                        </>
                    ):(
                        <></>
                    )}
                    {props.project !== '' ? (
                        <a href={props.project}><h3><BiLinkExternal></BiLinkExternal>Project</h3></a>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default ProjectBox