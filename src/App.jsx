
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import Home from './pages/Home';  // Import the Home page
import About from './pages/About' 


import './App.css';

function App() {


  return (
    <>
   

      <div className='bg-purple-600'>
      <Router>
        <Navbar />  {/* Navbar Component */}
 
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home Page Route */}
          <Route path="/About" element={<About />} /> 
         
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
