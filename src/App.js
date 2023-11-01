import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Login/singnup';
import SignIn from './components/Login/signin';
import LiveStreaming from './components/liveHosting';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/liveStreaming" element={<LiveStreaming />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
