import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Container, Row, and Col from react-bootstrap
import { MyCard } from './MyCard'; // Import MyCard component
import image from './assets/logo.png'
const Service = () => {
  // Dummy data for MyCard
  const cardData = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      imgUrl: image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl: image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      imgUrl:image
    },
    // Add more card objects as needed
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
