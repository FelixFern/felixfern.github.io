import { useEffect, useState } from 'react';
import {SiReact, SiJavascript, SiHtml5, SiCss3, SiPython} from 'react-icons/si'
import './App.css';

import Navbar from './components/Navbar';
import ProjectBox from './components/ProjectBox';
import SocialMedia from './components/SocialMedia';
import { ModalContext } from './context/global';
import Modal from './components/Modal';
import FeaturedProject from './components/FeaturedProject';

function App() {
    const [ModalToggle, setModalToggle] = useState([])
    const [ yOffset, setYOffset] = useState() 

    const handleScroll = () => setYOffset(window.scrollY)

    useEffect(() => {
        document.title = "Felix Fernando's Portofolio"
        setModalToggle({show: false, title: '' }, []);

        window.addEventListener('scroll', handleScroll, { passive: true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <ModalContext.Provider value={{ModalToggle, setModalToggle}}>
            <div className='main-container'>
                <div className='social-media'>
                    <SocialMedia></SocialMedia>
                </div>
                <div className={ModalToggle.show ?'modal-parent' : 'modal-parent m-display-none'}>
                    <Modal 
                        title={ModalToggle.title}>
                    </Modal>
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
                                <h1>my <span>projects</span></h1>
                                <p>Most of the project i've worked on</p>
                            </div>
                                <div className='featured-projects'>
                                    <FeaturedProject
                                        title="Wordle Recreated"
                                        subtitle="Web Application"
                                        desc="Wordle is a famous word guessing game created by Josh Wordle. in this project, the game is recreated using react javascript local storage."
                                        stacks={['React', 'Javascript', 'HTML', 'CSS', 'JS']}
                                        images={['./img/projects/wordle/wordle-1.png', './img/projects/wordle/wordle-2.png']}
                                        repo={'https://github.com/FelixFern/Wordle-React'}
                                        project={'https://felixfern.github.io/Wordle-React/'}
                                    ></FeaturedProject>
                                    <FeaturedProject
                                        title="Joel Foo's Portofolio Website"
                                        subtitle="Portofolio Website"
                                        desc="a Portofolio website built for a videographer and filmographer based on Tangerang,Joel Foo. This website is built with Strapi as the CMS, React as the frontend, and designed with Figma."
                                        stacks={['React', 'Strapi', 'HTML', 'CSS', 'JS', 'Figma']}
                                        images={['./img/projects/joel/joel-1.png']}
                                        repo={'https://github.com/FelixFern/Joel-Portofolio'}
                                        project={'https://joelfoofoo.netlify.app/'}
                                    ></FeaturedProject>
                                </div>
                                <div className='projects'>
                                    
                                </div>
                        </div>
                    </div>
                    <div id="about" className='about-me'>
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
                    <div id="contact" className='contact-me'>
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
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
  );
}

export default App;
