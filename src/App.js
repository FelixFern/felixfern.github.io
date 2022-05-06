import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
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
                    <div id="#home" className='home'>
                        <div className='home-content'>
                            <h4>Hi, my name is</h4>
                            <h1>Felix Fernando</h1>
                            <p className='home-desc'>i’m currently a student studying Mathematics at Bandung Institute of Technology with huge interest in frontend development and UI/UX design. </p>
                            <a href='#works' className='btn'>check out my work</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
