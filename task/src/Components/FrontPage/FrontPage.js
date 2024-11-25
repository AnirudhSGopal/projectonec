import React from 'react'
import './FrontPage.css'
import Navbar from '../Navbar/Navbar'
import Page1 from '../pages/page1/page1'
import Page2 from '../pages/page2/page2'
import Page3 from '../pages/page3/page3'
import Page4 from '../4Page/Page4'
import Page5 from '../5page/page5'
import Page6 from '../page6/page6'
import Page7 from '../page7/page7'
import Page8 from '../page8/page8'

function FrontPage() {
  return (
    <div>
      
    <Navbar/>
    <Page1></Page1>
    <Page2></Page2>
    <Page3></Page3>
    <Page4></Page4>
    <Page5></Page5>
    <Page6></Page6>
    <Page7></Page7>
    <Page8></Page8>

    </div>
  )
}

export default FrontPage
