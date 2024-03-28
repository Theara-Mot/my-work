import { Carousel } from 'react-bootstrap';
import b1 from './assets/banner-Dng1FNXe.jpeg'
import MouseParticleTrail from './MouseParticleTrail';
import React, { useState } from 'react';
import withMouseParticleTrail from "./MouseParticleTrail";
function Home() {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });
    };

    return (
        
        <section className="home" id="home" onMouseMove={handleMouseMove}>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b1}
                        alt="Fouth slide"
                    />
                    <Carousel.Caption style={{ top: '0', bottom: 'auto' }}>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
export default Home;
