import React from 'react';
import './Navbar.css';
import logo1 from '../../images/Asset.png';
import logo2 from '../../images/one.png';
import logo3 from '../../images/communn.png';
//import Page1 from '../pages/page1/page1';





export default function Navbar() {
  return (
    
    <div className='background'>
      <nav className='navbar'>
      <img className="logo1" src={logo1}alt="logo" />
      <div>
   <img className="logo2" src={logo2} alt="logo" />
   </div>
   <img className="logo3" src={logo3} alt="logo" />
        
        <ul className='Nav-links'>
          <li className='text' >I Can</li>
          <li className='text'>I Am</li>
          <li className='text'>Pricing</li>
          <li className='text'>About Us</li>
          <li className='text'>Contact Us</li>
        </ul>
      <div className='button'>
        <button className="cta-button1">Get Started For Free</button>
        </div>
        </nav>
       
        </div>
        
   
    
  

    
 
  );
}
