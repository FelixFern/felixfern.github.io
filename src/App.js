import { useEffect, useState } from 'react';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, ZoomOut, FadeOut} from "react-scroll-motion";
import {SiReact, SiJavascript, SiHtml5, SiCss3, SiPython} from 'react-icons/si'
import './App.css';

import Navbar from './components/Navbar';
import ProjectBox from './components/ProjectBox';
import SocialMedia from './components/SocialMedia';
import { ModalContext } from './context/global';
import Modal from './components/Modal';

function App() {
    const [ModalToggle, setModalToggle] = useState([])
    useEffect(() => {
        document.title = "Felix Fernando's Portfolio"
        console.log(ModalToggle)
        setModalToggle({show: false, title: '' }, []);
    }, [])
    return (
        <ModalContext.Provider value={{ModalToggle, setModalToggle}}>
            <div className='main-container'>
                <div className='social-media'>
                    <SocialMedia></SocialMedia>
                </div>
                <div className={ModalToggle.show ?'modal-parent' : 'modal-parent display-none'}>
                    <Modal 
                        title={ModalToggle.title}>
                    </Modal>
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
                                        <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                                            <h4>Hi, my name is</h4>
                                        </Animator>
                                        <Animator animation={batch(Fade(), MoveOut(350, 0))}>
                                            <h1>Felix Fernando</h1> 
                                        </Animator>
                                        <Animator animation={batch(Fade(), MoveOut(-150, 0))}>
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
                            <div id="works" className='works'>
                                <div className='works-content'>
                                    <div className='title'> 
                                            <h1>my <span>works</span></h1>
                                        <div className='line-container'>
                                            <div className='line-orange'></div>
                                            <div className='line-red'></div>
                                            <div className='line-green'></div>
                                        </div>
                                    </div>
                                        <div className='projects'>
                                            <ProjectBox
                                                type="Portfolio Website"
                                                title="Joel Foo Portfolio Website"
                                                desc="a portofolio website for a videographer and photographer based in Tangerang, Indonesia."
                                                stacks={["react"]}
                                                image='img/projects/joel.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Flutter App"
                                                title="Buangin App"
                                                desc="a prototype app to connect the community
                                                and waster collectors for the process of buying and selling waste."
                                                stacks={["flutter", "firebase"]}
                                                image='img/projects/buangin.jpg'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Website Application"
                                                title="Mathematical Challange Festival Web"
                                                desc="a website for mathematical competition organized by Mathematics ITB, i worked as the front-end developer for the website."
                                                stacks={["react"]}
                                                image='img/projects/mcf.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Static Website"
                                                title="Cov-idea Website"
                                                desc="Cov-Idea is a website used to collect data from questionnaire about Covid-19 spread in Bandung by embedding Google Forms to the website."
                                                stacks={["html", "css", "js"]}
                                                image='img/projects/covidea.png'
                                            ></ProjectBox>
                                            <ProjectBox
                                                type="Website Application"
                                                title="Sorting Algorithm Visualizer"
                                                desc="a Sorting algorithm visualizer built with HTML, CSS, and Javascript to visualize bubble sort, insertion sort, and selection sort."
                                                stacks={["html", "css", "js"]}
                                                image='img/projects/sorting-algo.png'
                                            ></ProjectBox>
                                        </div>
                                </div>
                            </div>
                            <div id="about-me" className='about-me'>
                                <div className='about-me-content'>
                                    <div className='title'> 
                                        <h1>about <span>me</span></h1>
                                        <div className='line-container'>
                                            <div className='line-green'></div>
                                            <div className='line-orange'></div>
                                            <div className='line-red'></div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <div className='picture'>
                                            <div className='color-fill'></div>
                                            <img src='img/picture.png'></img>
                                        </div>
                                        <div className='desc'>
                                            <h1>Hi, <span>I'm Felix Fernando</span>,</h1>
                                            <p>a university student from a small town called Bintan, Kepulauan Riau that is currently studying Mathematics at the Faculty of Mathematics and Natural Sciences, Bandung Institute of Technology. </p>
                                            <p>As a huge technology enthusiast since primary school, I've always been attracted to why and how computers work especially on the software side of things. But, why Mathematics? I believe that most algorithms or anything related to computers start from a mathematical equation, so with the basics in math, with that, I hope it can increase my pace in learning and be adaptive to technology progression because it's one of my goals to be proficient in both Mathematics and Computer Sciences.</p>
                                        </div>
                                    </div>
                                    <div className='stacks'>
                                        <h3>Programming Languange / Tech Stacks : </h3>
                                        <div className='stacks-list'>
                                            <SiPython></SiPython>
                                            <SiHtml5></SiHtml5>
                                            <SiCss3></SiCss3>
                                            <SiJavascript></SiJavascript>
                                            <SiReact></SiReact>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="contact-me" className='contact-me'>
                                <div className='contact-me-content'>
                                    <div className='title'> 
                                        <h1>contact <span>me</span></h1>
                                        <div className='line-container'>
                                            <div className='line-red'></div>
                                            <div className='line-orange'></div>
                                            <div className='line-green'></div>
                                        </div>
                                    </div>
                                    <div className='content'>
                                        <h2>Interested in working together?</h2>
                                        <p>need website or want to collaborate ? contact me by clicking the button below</p>
                                        <a className='btn' href='mailto:felixzhuang12348@gmail.com'>contact me</a>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <p>Developed and Designed by Felix Fernando</p>
                            </footer>
                        </ScrollContainer>
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
  );
}

export default App;
