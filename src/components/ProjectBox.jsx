import React, { useContext, useState } from 'react'
import './ProjectBox.css'
import {SiReact, SiFigma, SiJavascript, SiFlutter, SiFirebase, SiHtml5, SiCss3, SiStrapi} from 'react-icons/si'
import { ModalContext } from '../context/global'

function ProjectBox(props) {
    let stacks = props.stacks
    const {ModalToggle, setModalToggle} = useContext(ModalContext)
    return (
        <div className='project-main-box' onClick={
            () => {
                setModalToggle({show: true, title:props.title})
                console.log(ModalToggle)
            }
        }>
            <div className='color-fill'></div>
            <img className='bg-image' src={(props.image)} alt={props.title}></img>
            <div className='content'>
                <div className='head'>
                    <h3>{props.type}</h3>
                    <div className='stacks'>
                        {stacks.map((stack,key) => {
                            if(stack == "react") return (<SiReact className='stack-icon'></SiReact>)
                            else if(stack == "figma") return (<SiFigma className='stack-icon'></SiFigma>)
                            else if(stack == "flutter") return (<SiFlutter className='stack-icon'></SiFlutter>)
                            else if(stack == "firebase") return (<SiFirebase className='stack-icon'></SiFirebase>)
                            else if(stack == "js") return (<SiJavascript className='stack-icon'></SiJavascript>)
                            else if(stack == "html") return (<SiHtml5 className='stack-icon'></SiHtml5>)
                            else if(stack == "css") return (<SiCss3 className='stack-icon'></SiCss3>)
                            else if(stack == "strapi") return (<SiStrapi className='stack-icon'></SiStrapi>)
                        })
                        }
                    </div>
                </div>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            
        </div>
    )
}

export default ProjectBox