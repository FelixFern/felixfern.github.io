import './App.css';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';

function App() {
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
