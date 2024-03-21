import React from 'react';
import { NavBar } from './NavBar'; // Adjust the path if necessary
import Home from './Home';
import Services from './Services';
import Promotions from './Promotion';

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <Services/>
            <Promotions/>
        </div>
    );
}

export default App;
