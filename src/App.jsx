import React from 'react';
import { NavBar } from './NavBar'; // Adjust the path if necessary
import Home from './Home';
import Services from './Services';
import Promotions from './Promotion';
import MouseParticleTrail from './MouseParticleTrail'
function App() {
    return (
        <>
            <MouseParticleTrail/>
            <NavBar />
            <Home />
            <Services/>
            <Promotions/>
        </>
    );
}

export default App;
