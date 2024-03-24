import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "./assets/react.svg";
import image1 from "./assets/vite.svg";
import { useTranslation } from "react-i18next";

function About() {
  const [t,i18n] = useTranslation('global');
  const p1 = [
    {
      title:t('about.p1_title1'),
      text: t("about.p1_des1"),
      imgSrc: image,
    },
    {
      title:t('about.p1_title2'),
      text: t("about.p1_des2"),
      imgSrc: image,
    },
    {
      title:t('about.p1_title3'),
      text: t("about.p1_des3"),
      imgSrc: image,
    },
    {
      title:t('about.p1_title4'),
      text: t("about.p1_des4"),
      imgSrc: image,
    },
    {
      title:t('about.p1_title5'),
      text: t("about.p1_des5"),
      imgSrc: image,
    },
  ];
  const leader = [
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
  ];
  const management = [
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
    {
      name:t('about.p2_name1'),
      position: t("about.p2_position1"),
      description:t("about.p2_des1"),
      imgSrc: image,
    },
  ];
  const renderContent = (item, index) => {
    return (
      <Col
        xs={12}
        md={6}
        className="d-flex justify-content-center align-items-center"
        key={index}
      >
        {index % 2 === 0 ? (
          <>
            <div className="text-column" style={{ textAlign: "right" }}>
              <h4><b>{item.title}</b></h4>
              <div className='hb'></div>
              <p>{item.text}</p>
            </div>
            <img className="goal-about-img1" src={item.imgSrc} alt="" />
          </>
        ) : (
          <>
            <img className="goal-about-img1" src={item.imgSrc} alt="" />
            <div className="text-column" style={{ textAlign: "left" }}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </>
        )}
      </Col>
    );
  };
  return (
    <div className="about-page" id="about">
      <Col>
        <Container>
          <div className="content">
            <h1>
            {t("about.about")} <span style={{ color: "#01aae0" }}>{t("about.us")} </span>
            </h1>
            <p>{t("about.description")}</p>
            <div className="blue-container"></div>
          </div>
        </Container>
        <div className="heightbox"></div>
        <Container>
          <Row>{p1.map((item, index) => renderContent(item, index))}</Row>
        </Container>
        <hr />
        <div className="heightbox"></div>
        <Container>
          <div className="content">
            <h1>
            <span style={{ color: "#01aae0" }}>{t('about.board_director')} </span>
            </h1>
            <div className="blue-container"></div>
          </div>
          <div className="heightbox"></div>
          <Container>
            {leader.map((item, index) => (
              <Col
                key={index}
                xs={12}
                md={12}
                className="d-flex justify-content-center align-items-center mb-5"
              >
                {index % 2 === 1 ? (
                  <>
                    <div className="text-column" style={{ textAlign: "right" }}>
                      <h5>{index+1}. {item.name}</h5>
                      <h5>{item.position}</h5>
                      <p>{item.description}</p>
                      <hr style={{ color: "blue" }} />
                    </div>
                    <img className="goal-about-img" src={item.imgSrc} alt="" />
                  </>
                ) : (
                  <>
                    <img className="goal-about-img" src={item.imgSrc} alt="" />
                    <div className="text-column" style={{ textAlign: "left" }}>
                      <h5>{index+1}. {item.name}</h5>
                      <h5>{item.position}</h5>
                      <p>{item.description}</p>
                      <hr style={{ color: "blue" }} />
                    </div>
                  </>
                )}
              </Col>
            ))}
            <div className="mangement-conbiation">
              <Row className="justify-content-center">
                <img className="mangement-conbiation-img" src={image1} alt="" />
                <img className="mangement-conbiation-img" src={image1} alt="" />
                <img className="mangement-conbiation-img" src={image1} alt="" />
              </Row>
              <h2></h2>
              <h3>Our Team has 80 years combination</h3>
            </div>
          </Container>
        </Container>
        
        <hr />
        <div className="heightbox"></div>
        <Container>
          <div className="content">
            <h1>
            {t('about.management')} <span style={{ color: "#01aae0" }}>{t('about.team')}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
              accumsan justo. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed et accumsan justo. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed et accumsan justo. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed et accumsan
              justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed et accumsan justo.
            </p>
            <div className="blue-container"></div>
            <div className="heightbox"></div>
          </div>
          <Container>
            {management.map((item, index) => (
              <Col
                key={index}
                xs={12}
                md={12}
                className="d-flex justify-content-center align-items-center mb-5"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="text-column" style={{ textAlign: "right" }}>
                      <h5>{index+1}.  {item.name}</h5>
                      <h5>{item.position}</h5>
                      <p>{item.description}</p>
                      <hr style={{ color: "blue" }} />
                    </div>
                    <img className="goal-about-img" src={item.imgSrc} alt="" />
                  </>
                ) : (
                  <>
                    <img className="goal-about-img" src={item.imgSrc} alt="" />
                    <div className="text-column" style={{ textAlign: "left" }}>
                    <h5>{index+1}.  {item.name}</h5>
                      <h6>{item.position}</h6>
                      <p>{item.description}</p>
                      <hr style={{ color: "blue" }} />
                    </div>
                  </>
                )}
              </Col>
            ))}
            <div className="mangement-conbiation">
              <Row className="justify-content-center">
                <img className="mangement-conbiation-img" src={image1} alt="" />
                <img className="mangement-conbiation-img" src={image1} alt="" />
                <img className="mangement-conbiation-img" src={image1} alt="" />
                <img className="mangement-conbiation-img" src={image1} alt="" />
              </Row>
              <h2></h2>
              <h3>Our Team has 80 years combination</h3>
            </div>
          </Container>
        </Container>
      </Col>
    </div>
  );
}

export default About;
