import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PromotionCard from './PromotionCard'; // Import the PromotionCard component
import { useTranslation } from 'react-i18next';

function Promotions() {
    const [t,i18n] = useTranslation("global");

    const data = [ 
        {
            type: t('promotions.member'),
            amount: 3000,
            des: t('promotions.description'),
            containerColor: "#add8e6"
        },
        {
            type: t('promotions.agent'),
            amount: 3000,
            des: t('promotions.description'),
            containerColor: "#87cefa"
        },
        {
            type: t('promotions.charge'),
            amount: 3000,
            des: t('promotions.description'),
            containerColor: "#87ceeb"
        }
    ];

    return (
        <div className="about-page" id="promotion">
            <Col>
                <Container>
                    <div className="content">
                    <h1><span style={{ color: "#01aae0" }}>{t('header.promotions')}</span> & <span style={{ color: "#01aae0" }}>{t('promotions.marketing')}</span></h1>
                        <p>{t('promotions.description')}</p>
                    </div>
                </Container>
                <Container>
                    <Row>
                        {data.map((item, index) => (
                            <Col key={index}>
                                <PromotionCard
                                    type={item.type}
                                    amount={item.amount}
                                    des={item.des}
                                    containerColor={item.containerColor}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
        </div>
    );
}

export default Promotions;
