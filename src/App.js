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
                <Navbar></Navbar>
            </div>
        </div>
  );
}

export default App;
