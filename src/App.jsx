import React from "react";
import { NavBar } from "./NavBar"; // Adjust the path if necessary
import Home from "./Home";
import Services from "./Services";
import Promotions from "./Promotion";
import About from "./About";
import Career from "./Career";
import Footer from "./Footer";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Services />
      <Promotions />
      <About />
      <Career />
      <Footer />
    </>
  );
}

export default App;
