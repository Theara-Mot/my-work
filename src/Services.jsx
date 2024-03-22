import React from 'react';
import MouseParticleTrail from './MouseParticleTrail'; // Import the MouseParticleTrail component

const Service = () => {
    return (
        <div className="service-page">
            <MouseParticleTrail /> {/* Include the MouseParticleTrail component */}
            <div className="content">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et accumsan justo.</p>
                {/* Add more content as needed */}
            </div>
        </div>
    );
};

export default Service;
