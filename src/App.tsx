import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';
import CSSAWebsite from './pages/Projects/CSSAWebsite';
import PLDatabase from './pages/Projects/PLDatabase';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <div className='bard'></div>
        {/* <Navbar title="My Navbar" links={links} /> */}
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/experience" Component={Resume} />
          <Route path='/cssawebsite' Component={CSSAWebsite} />
          <Route path='/pldatabase' Component={PLDatabase} />
        </Routes>
        {/* <img src={BackgroundImage} /> */}
      </div>
    </Router>
  );
}

export default App;
