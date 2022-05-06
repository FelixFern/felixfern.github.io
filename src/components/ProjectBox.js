import React from 'react'
import './ProjectBox.css'
import {FaReact, FaFigma, FaJsSquare} from 'react-icons/fa'

function ProjectBox(props) {
    let stacks = props.stacks
    console.log(stacks)
    return (
        <div className='project-main-box'>
            <div className='color-fill'></div>
            <img className='bg-image' src={(props.image)} alt={props.title}></img>
            <div className='content'>
                <div className='head'>
                    <h3>{props.type}</h3>
                    <div className='stacks'>
                        {stacks.map((stack,key) => {
                            if(stack == "react") {
                                console.log(stack)
                                return (<FaReact className='stack-icon'></FaReact>)
                            }
                            else if(stack == "figma") {
                                return (<FaFigma className='stack-icon'></FaFigma>)
                            }
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