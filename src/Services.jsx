import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col from react-bootstrap
import { MyCard } from './MyCard'; // Import MyCard component
import image from './assets/react.svg'
const Service = () => {
  screenLeft
  const cardData = [
    {
      title: "Top Up",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: image
    },
    {
      title: "Money Transfer",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: image
    },
    {
      title: "Exchange Currency",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgUrl: image
    },
    {
      title: "Payroll Service",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: image
    },
    {
      title: "Deposit",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imgUrl: image
    },
    {
      title: "Withdraw",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imgUrl: image
    },
    {
      title: "Bill Payments",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      imgUrl: image
    },
    {
      title: "Loan Service",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imgUrl: image
    },
  ];
  

  return (
    <div className="service-page" id="service">
      <Col>
      <Container>
      <div className="content">
        <h1>Service & <span style={{ color: "#01aae0" }}>Product</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et accumsan justo.</p>
      </div>
      </Container>
      <Container>
        <Row>
          {cardData.map((card, index) => (
            <Col md={3} key={index}>
              <MyCard
                src={image}
                title={card.title}
                description={card.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
      </Col>
    </div>
  );
};

export default Service;
