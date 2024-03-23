import React from 'react';
import { NavBar } from './NavBar'; // Adjust the path if necessary
import Home from './Home';
import Services from './Services';
import Promotions from './Promotion';
import { ServiceCard } from './ServiceCard'; // Import the ServiceCard component
import image1 from './assets/b1.jpg'

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <Services/>
            <Promotions/>
        </>
    );
}

export default App;
