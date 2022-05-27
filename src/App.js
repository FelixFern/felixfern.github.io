import { useEffect } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, ZoomOut, FadeOut} from "react-scroll-motion";
import './App.css';

import Navbar from './components/Navbar';
import ProjectBox from './components/ProjectBox';
import SocialMedia from './components/SocialMedia';

function App() {
    useEffect(() => {
        document.title = "Felix Fernando's Portfolio"
    }, [])
    return (
        <div className='main-container'>
            <div className='social-media'>
                <SocialMedia></SocialMedia>
            </div>
            <div className="main">
                <div className='navbar'>
                    <Navbar></Navbar>
                </div>
                <div className='content'>
                    <ScrollContainer>
                        <ScrollPage page={0}>
                            <div id="home" className='home'>
                                <div className='home-content'>
                                    <Animator animation={batch(Fade(), MoveOut(200, 0))}>
                                        <h4>Hi, my name is</h4>
                                    </Animator>
                                    <Animator animation={batch(Fade(), MoveOut(350, 0))}>
                                        <h1>Felix Fernando</h1> 
                                    </Animator>
                                    <Animator animation={batch(Fade(), MoveOut(150, 0))}>
                                        <p className='home-desc'>i’m currently a student studying Mathematics at Bandung Institute of Technology with huge interest in frontend development and UI/UX design. </p>
                                    </Animator>
                                    <Animator animation={batch(Fade(), MoveOut(200, 0))}>
                                        <a href='#works' className='btn'>check out my work</a>
                                    </Animator>
                                </div>
                                <Animator animation={batch(Fade(), MoveOut(-500, 100), ZoomOut(1, 2))}>
                                <div className='shapes'>
                                    <div className='square'></div>
                                    <div className='square-s'></div>
                                    <svg className='triangle-s' width="87" height="76" viewBox="0 0 87 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.67727 70.3182L43.3183 10.3182L77.9593 70.3183L8.67727 70.3182Z" stroke="#FF3D3D" stroke-width="10"/>
                                    </svg>
                                    <svg className='triangle' width="106" height="86" viewBox="0 0 106 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M53.02 0.659174L0.674858 85.1006L105.365 85.1006L53.02 0.659174Z" fill="#3DFF68"/>
                                    </svg>
                                    <div className='circle'></div>
                                    <div className='circle-s'></div>
                                </div>
                                </Animator>
                            </div>
                        </ScrollPage>
                        <ScrollPage page={1}>
                            <div id="works" className='works'>
                                <div className='works-content'>
                                    <div className='title'> 
                                        <Animator animation={MoveIn(-200, 0)}>
                                            <h1>my <span>works</span></h1>
                                        </Animator>
                                        <div className='line'></div>
                                    </div>
                                    <Animator animation={MoveIn(0, 300)}>
                                        <div className='projects'>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                        </div>
                                    </Animator>
                                    
                                </div>
                            </div>
                        </ScrollPage>

                    </ScrollContainer>
                </div>
            </div>
        </div>
  );
}

export default App;
