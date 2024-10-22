
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar component
import Home from './pages/Home';  // Import the Home page
import About from './pages/About' 
import Footer from './components/Footer';


import './App.css';
import { useState } from 'react';

function App() {
  const [addClickedProducts,setAddClickedProducts] = useState([]);




  function handleAddClickProduct(id){
    setAddClickedProducts((prevClickedProducts) => [...prevClickedProducts, id]);
    alert('added  products : '+addClickedProducts)

   }


  return (
    <>
   

      <div >
      <Router>
        <Navbar />  {/* Navbar Component */}
       
 
        <Routes>
          <Route path="/" element={<Home handleAddClickProduct={handleAddClickProduct} />} />  {/* Home Page Route */}
          <Route path="/About" element={<About />} /> 
         
        </Routes>
        <Footer></Footer>
      </Router>
      </div>
    </>
  );
}

export default App;
