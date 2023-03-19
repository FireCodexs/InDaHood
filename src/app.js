import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.jsx";
import Men from "./components/pages/Men.jsx";
import Contact from "./components/pages/Contact.jsx";
import SignUp from "./components/pages/SignUp";
import Women from "./components/pages/Women.jsx"
//

const App = () => {
  return( 
<>
      <Router>
        
          <Navbar />
          {/* Wrap Route elements in a Routes component */}
          <Routes  >
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/women" element={<Women />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/men" element={<Men />} />
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* Define a route that will have descendant routes */}
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        
      </Router>
       
        </>
  );
};

export default App;
