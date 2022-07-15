import { useEffect, useState, useRef } from 'react';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiPython } from 'react-icons/si'
import {FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import { yOffsetContext } from './context/global';
import AOS from 'aos';

import './App.css';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import ProjectBox from './components/ProjectBox';
import SocialMedia from './components/SocialMedia';
import FeaturedProject from './components/FeaturedProject';
import ScrollTop from './components/ScrollTop';

function App() {
    const [ yOffset, setYOffset ] = useState() 
    const handleScroll = () => setYOffset(window.scrollY)
    useEffect(() => {
        document.title = "Felix Fernando's Portofolio"
        AOS.init()
        window.addEventListener('scroll', handleScroll, { passive: true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    useEffect(() => {
        if(yOffset >= 800) {setYOffset(1)}
    },[ yOffset ])

    return (
        <yOffsetContext.Provider value={{ yOffset, setYOffset }}>
            <div className='main-container'>
                <ScrollTop></ScrollTop>
                <div className='social-media'>
                    <SocialMedia></SocialMedia>
                </div>
                <div className="main">
                    <div className='navbar'>
                        <Navbar></Navbar>
                    </div>
                    <div className='content'>
                        <div id="home" className='home'>
                            <div className='home-content'>
                                <h4 style={{ transform: `translateX(-${yOffset * 0.3}px)`, opacity: `${1 - yOffset * 0.005}` }} >Hi, my name is</h4>
                                <h1 style={{ transform: `translateX(-${yOffset * 0.2}px)`, opacity: `${1 - yOffset * 0.003}` }}>Felix Fernando</h1> 
                                <p style={{ transform: `translateX(-${yOffset * 0.25}px)`, opacity: `${1 - yOffset * 0.004}` }} className='home-desc'>i’m currently a student studying Mathematics at Bandung Institute of Technology with huge interest in frontend development and UI/UX design. </p>
                                <a style={{ opacity: `${1 - yOffset * 0.005}` }} href='#works' className='btn'>check out my work</a>
                            </div>
                            <div className='shapes' style={{ transform: `translateX(${yOffset * 0.2}px)`}}>
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
                        </div>
                        <div id="works" className='works'>
                            <div className='works-content'>
                                <div className='title'> 
                                    <h1 data-aos='fade'>my <span>projects</span></h1>
                                    <p data-aos='fade-up'>Most of the project i've worked on</p>
                                </div>
                                <div className='featured-projects'>
                                    <FeaturedProject
                                        title="SSK Interior Design"
                                        subtitle="Portofolio Website"
                                        desc="a fully responsive portofolio website created for Sinar Surya Kontrarindo. This project is built with React as the frontend and ExpressJS as the backend, this project utilise ExpressJS to crawl the folder project to access the portofolio by folder. This website project is designed in Figma."
                                        stacks={['React', 'Express', 'Node', 'Figma']}
                                        images={['./img/projects/ssk/ssk-1.png', './img/projects/ssk/ssk-2.png', './img/projects/ssk/ssk-3.png', './img/projects/ssk/ssk-4.png', './img/projects/ssk/ssk-5.png']}
                                        repo={''}
                                        project={'https://sskdesigninterior.com/'}
                                    ></FeaturedProject>
                                    <FeaturedProject
                                        title="Wordle Recreated"
                                        subtitle="Web Application"
                                        desc="Wordle is a famous word guessing game created by Josh Wordle. In this project, the game is recreated using react with javascript local storage."
                                        stacks={['React']}
                                        images={['./img/projects/wordle/wordle-1.png', './img/projects/wordle/wordle-2.png']}
                                        repo={'https://github.com/FelixFern/Wordle-React'}
                                        project={'https://felixfern.github.io/Wordle-React/'}
                                    ></FeaturedProject>
                                    <FeaturedProject
                                        title="Joel Foo's Portofolio Website"
                                        subtitle="Portofolio Website"
                                        desc="a fully responsive portofolio website built for a videographer and filmographer based on Tangerang, Joel Foo. This website is built with Strapi as the CMS, React as the frontend, and designed with Figma."
                                        stacks={['React', 'Strapi', 'Figma']}
                                        images={['./img/projects/joel/joel-1.png', './img/projects/joel/joel-2.png', './img/projects/joel/joel-3.png', './img/projects/joel/joel-4.png', './img/projects/joel/joel-5.png', './img/projects/joel/joel-6.png', './img/projects/joel/joel-7.png']}
                                        repo={'https://github.com/FelixFern/Joel-Portofolio'}
                                        project={'https://joelfoofoo.netlify.app/'}
                                    ></FeaturedProject>
                                </div>
                                <h2 data-aos="fade-right">other <span>works</span></h2>
                                <div className='projects'>
                                    <ProjectBox
                                        type="Web Application"
                                        title="CheckIt - Simple To-do List"
                                        stacks={['React', "Flask", "Tailwind"]}
                                        desc="a simple CRUD app with React as the frontend and Flask as the backend."
                                        repo="https://github.com/FelixFern/CheckIt"
                                        project=''
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Web Application"
                                        title="Sorting Algorithm Visualizer"
                                        stacks={['JS', "HTML", "CSS"]}
                                        desc="a simple sorting algorithm visualizer created with Javascript."
                                        repo="https://github.com/FelixFern/sorting-algo-vis"
                                        project="https://felixfern.github.io/sorting-algo-vis/"
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Python Script"
                                        title="Average Blur and Gaussian Blur"
                                        stacks={["Python"]}
                                        desc="a python script to apply gaussian blur and average blur to an image file."
                                        repo='https://github.com/FelixFern/MA2151-Simulation-and-Mathematical-Computation/tree/main/Average%20Blur%20and%20Gaussian%20Blur'
                                        project=''
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Python Script"
                                        title="Pit Viper Simulation"
                                        stacks={["Python"]}
                                        desc="a simulation of pit viper hunting for prey (rodent)."
                                        repo='https://github.com/FelixFern/MA2151-Simulation-and-Mathematical-Computation/tree/main/Pit%20Viper%20Simulation'
                                        project=''
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Web Application"
                                        title="Rotten Potatoes"
                                        stacks={["React"]}
                                        desc="a website that shows movie lists from the TMDB API (themoviedb.org). "
                                        repo='https://github.com/FelixFern/rotten_potatoes_react'
                                        project='https://felixfern.github.io/rotten_potatoes_react/'
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Flutter Application"
                                        title="Buangin"
                                        stacks={['Flutter', 'Firebase']}
                                        desc="a prototype Flutter application to carry out buying and selling waste process."
                                        repo='https://github.com/FelixFern/Buangin'
                                        project=''
                                    ></ProjectBox>
                                    <ProjectBox
                                        type="Web Application"
                                        title="Cov-idea"
                                        stacks={["HTML", "CSS", "JS"]}
                                        desc="Cov-Idea is a website used to collect questionnaire about Covid-19 spread in Bandung by embedding Google Forms."
                                        repo='https://github.com/FelixFern/Cov-idea'
                                        project='https://felixfern.github.io/Cov-idea/'
                                    ></ProjectBox>
                                </div>
                            </div>
                        </div>
                        <div id="about" className='about-me'>
                            <div className='about-me-content'>
                                <div className='title'> 
                                    <h1 data-aos='fade-right'>about <span>me</span></h1>
                                    <div className='line-container' data-aos='fade-up'>
                                        <div className='line-green'></div>
                                        <div className='line-orange'></div>
                                        <div className='line-red'></div>
                                    </div>
                                </div>
                                <div className='content'>
                                    <div className='picture' data-aos='fade'>
                                        <div className='color-fill'></div>
                                        <img src='img/picture.png'></img>
                                    </div>
                                    <div className='desc'>
                                        <h1 data-aos='fade-left'>Hi, <span>I'm Felix Fernando</span>,</h1>
                                        <p data-aos='fade-left'>a university student from a small town called Bintan, Kepulauan Riau that is currently studying Mathematics at the Faculty of Mathematics and Natural Sciences, Bandung Institute of Technology. </p>
                                        <p data-aos='fade-left'>As a huge technology enthusiast since primary school, I've always been attracted to why and how computers work especially on the software side of things. But, why Mathematics? I believe that most algorithms or anything related to computers start from a mathematical equation, so with the basics in math, with that, I hope it can increase my pace in learning and be adaptive to technology progression because it's one of my goals to be proficient in both Mathematics and Computer Sciences.</p>
                                    </div>
                                </div>
                                <div className='stacks'>
                                    <h3 data-aos="fade">Programming Languange / Tech Stacks : </h3>
                                    <div className='stacks-list' data-aos='fade-left'>
                                        <SiPython></SiPython>
                                        <SiHtml5></SiHtml5>
                                        <SiCss3></SiCss3>
                                        <SiJavascript></SiJavascript>
                                        <SiReact></SiReact>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact" className='contact-me'>
                            <div className='contact-me-content'>
                                <div className='title'> 
                                    <h1 data-aos='fade-right'>contact <span>me</span></h1>
                                    <div className='line-container' data-aos='fade-up'>
                                        <div className='line-red'></div>
                                        <div className='line-orange'></div>
                                        <div className='line-green'></div>
                                    </div>
                                </div>
                                <div className='content' data-aos='fade-left'>
                                    <h2>Interested in working together?</h2>
                                    <p>need website or want to collaborate ? contact me by clicking the button below</p>
                                    <a className='btn' href='mailto:felixzhuang12348@gmail.com'>contact me</a>
                                </div>
                            </div>
                        </div>
                        <div className='footer'>
                            <p>Developed and Designed by <span>Felix</span>Fernando</p>
                            <div className='social-media'>
                                <a href='https://github.com/FelixFern'><FaGithub></FaGithub></a>
                                <a href='https://www.linkedin.com/in/felix-fern/'><FaLinkedin></FaLinkedin></a>
                                <a href='https://www.instagram.com/felixfern_/'><FaInstagram></FaInstagram></a>
                                <a href='https://www.youtube.com/channel/UCK-KH0huKdyiDQUvQZQyy_A'><FaYoutube></FaYoutube></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </yOffsetContext.Provider>
    );  
}

export default App;
