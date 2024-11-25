import './page7.css';
import React, { useState } from 'react';
import { Accordion, Card, Button, useAccordionButton, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

function CustomToggle({ children, eventKey, callback }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    callback && callback(eventKey),
  );

  return (
    <Button
      variant="link"
      onClick={decoratedOnClick}
      className="text-left"
      style={{ width: '100%', textDecoration: 'none' }}
    >
      {children}
    </Button>
  );
}

function Page7() {
  const [activeKey, setActiveKey] = useState(null);

  const toggleIcon = (key) => (activeKey === key ? <FaMinus /> : <FaPlus />);

  const handleSelect = (key) => {
    setActiveKey(activeKey === key ? null : key); // Toggle logic
  };

  return (
    <div className='questions'>
      <div className='fontalign'>
        <h4 className='qfont'>
          Frequently Asked Questions
        </h4>
      </div>
      <div className='alignbox'>
      <div className="container my-5">
        <Accordion className='accordion' activeKey={activeKey} onSelect={handleSelect}>
          <Row >
            {/* First and Second FAQ */}
            <Col md={6}>
              <Card className='cardsalign'>
                <Card.Header>
                  <CustomToggle eventKey="0" callback={handleSelect}>
                    {toggleIcon('0')} Why is Webflow the best nocode tool?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Webflow offers powerful customization options without needing to write code, making it one of the most flexible no-code tools for designers and developers.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="1" callback={handleSelect}>
                    {toggleIcon('1')} How to launch a Webflow website?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Webflow was founded in 2013.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            {/* Third and Fourth FAQ */}
            <Col md={6}>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="2" callback={handleSelect}>
                    {toggleIcon('2')} When did Webflow was founded?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    No-code tools are gaining popularity, enabling users to build websites and applications without extensive coding knowledge.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="3" callback={handleSelect}>
                    {toggleIcon('3')} Who founded BRIX Templates?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3" callback={handleSelect}>
                  <Card.Body>
                    Yes, Webflow allows you to create a fully functional website, including animations, eCommerce stores, and responsive design, all without coding.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            {/* Fifth and Sixth FAQ */}
            <Col  md={6} >
              <Card>
                <Card.Header>
                  <CustomToggle  eventKey="4" callback={handleSelect}>
                    {toggleIcon('4')} Is NoCode the future of the web?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    Webflow provides a visual interface to design and develop websites, whereas traditional development requires coding from scratch. It saves time but might have some limitations in very custom functionalities.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
            
            <Col md={6}>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="5" callback={handleSelect}>
                    {toggleIcon('5')} Who are the Webflow founders?
                  </CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body>
                    Yes, Webflow supports eCommerce functionality, allowing users to create online stores with customizable product pages, checkout, and payment gateways.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Col>
          </Row>
        </Accordion>
      </div>
      </div>
    </div>
  );
}

export default Page7;
