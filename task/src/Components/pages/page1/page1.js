import React from 'react';
import './page1.css'
import image1 from '../../../images/Frame693new.png'
import google from '../../../images/google.svg';
  
import apple from'../../../images/apple.svg';
export default function page1() {
  return (
    <div >
    <div className='wordpage1'>
      <h1 className="page1">"Automate Community <br /> Management with AI-Powered <br /> <span className='subscription'>Subscriptions</span> Effortlessly" </h1>
      <h4 className='subheading'>
      Our AI-powered platform enhances community management with tools for<br /> user data management, interaction, communication, subscription and <br />payment processing, content management, and advanced analytics
      </h4>
      </div>
      <div>
 
  </div>
<button className='frame1'>
  <div className='align-logo1'>
  <img  className ="google"src={google} alt="logo" ></img>
  </div>
  <div className='alignbutton1'>
<span className='get1'>GET IT ON</span>
  <br />
  <strong className='google-button'>Google Play</strong>
  </div>
</button>




 
<button className='frame2'>
  <div className='align'>
  <img  className ="apple"src={apple} alt="logo" />
  </div>
<div className='alignbutton2'>
  <span className='get1'>GET IT ON</span>
  <br />
  <strong className='google-button'>Play Store</strong>
  </div>
</button>

    <div className="page12">
 <img  className ="page12"src={image1} alt="" />
    </div>
    
    </div>
  
  )
}
