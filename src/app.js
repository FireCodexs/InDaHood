import React from "react";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (<div>
    <Router>
      <Routes>
        <Route path="/cart"/>
      </Routes>
    </Router>
    
<Cart/>
  </div>
  
  )
};

export default App;
