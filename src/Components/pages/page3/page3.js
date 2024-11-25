import React from 'react';
import Card from 'react-bootstrap/Card';
import './page3.css';
import image1 from '../../../images/womenclean.png';
import image2 from '../../../images/entrepreneurs.png';
import image3 from '../../../images/gymowner.png';
import Leftaw from'../../../images/aleft.png';
import rightaw from'../../../images/aright.png';


function Page3() {
  return (
    <div className='background' >
      {/* Title Section */}
      <div className="usecase">
        <h4 className="page3font">Use Cases</h4>
      </div>

      <div className="frame d-flex justify-content-center">
        {/* Homemaker Card */}
        <div className='leftframe'>
    <img  className='leftlogo'src={Leftaw} alt="logo" />
    </div>
        <Card className="cardsize mx-4">
          <Card.Img className="imagesize" variant="top" src={image1} />
            <Card.Body>
              <div className='wrap'>
            <Card.Title className="first">I'M A <br /><span className="fonttype">Homemaker</span></Card.Title>
            </div>
            <Card.Text className='textalign'>
              Transform your home into a global hub for<br /> homemakers to share recipes, home decor ideas,<br />
              parenting tips, and more, cultivating a family-like, <br /> nurturing community.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Entrepreneur Card */}
        <Card className="cardsize mx-4">
      
            <Card.Img className="imagesize" variant="top" src={image2} />
          
          <Card.Body>
            <Card.Title className="first">I'M A <br /><span className="fonttype">Entrepreneur</span></Card.Title>
            <Card.Text className='textalign'>
              Supercharge your professional connections.<br /> Network with fellow entrepreneurs, freelancers,<br /> 
              and experts. Share insights, collaborate, and <br />unlock business opportunities.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Gym Owner Card */}
        <Card className="cardsize mx-4">
         <Card.Img className="imagesize" variant="top" src={image3} />
         <Card.Body className='cardbody'>
            <Card.Title className="first">I'M A <br /><span className="fonttype">Gym Owner</span></Card.Title>
            <Card.Text className='textalign'>
            Supercharge your professional connections.<br /> Network with fellow entrepreneurs, freelancers,<br /> 
            and experts. Share insights, collaborate, and <br />unlock business opportunities.
            </Card.Text>
          </Card.Body>
        </Card>
       
      </div>
      <div className='rightframe'>
      <img className='rightlogo' src={rightaw} alt="logo" />
      </div>
    </div>
  );
}

export default Page3; 