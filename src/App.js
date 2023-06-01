import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Aboutme from './components/pages/Aboutme'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Project
function App() {
    
  return (
    <div>
        <BrowserRouter>
      <Header />
      {/* <Navbar /> */}
        <Routes>
            <Route path='/projects' element={<Portfolio/>}/>
            <Route path='/about' element={<Aboutme/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer />
        </BrowserRouter>
      {/* <Project />
      <Project />
      <Project /> */}
    </div>
  );
}

export default App;