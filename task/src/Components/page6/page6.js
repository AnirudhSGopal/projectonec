import React from 'react'
import './page6.css'
import Social from '../../images/Media.png'
 

function page6() {
  return (
    <div>
      <div className='align-data'>
        <h4 className='hsocial'>
        Communicate and <br/>Interact with Ease
        </h4>
        <h4 className='s-social'>
    Experience seamless communication and transform the way you <br/> engage with your community. Communn provides powerful tools <br/>and intuitive communication channels to build strong <br/> connections. Foster discussions, inspire interactions, and keep<br/> your members COMING BACK FOR MORE.
        </h4>
      </div>
      <div>
     
        <img className='socialimg' src={Social} alt="" />
      </div>
     
    </div>
  )
  
}

export default page6
