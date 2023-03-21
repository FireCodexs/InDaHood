import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Men from "./components/pages/Men.jsx";
import Contact from "./components/pages/Contact.jsx";
import SignUp from "./components/pages/SignUp";
import Women from "./components/pages/Women.jsx";
import Cart from "./components/cart/Cart";
import Card from "./components/card/Card";
import products from "./datasource.json";
import Wrapper from "./components/wrapper/Wrapper";
import HeroBanner from "./components/Hero/HeroBanner.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      <section className="bg-[#333]">
        <Router>
          <Navbar />
          <HeroBanner/>

          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/women" element={<Women />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/men" element={<Men />} />
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* Define a route that will have descendant routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/"
              element={
                <Wrapper>
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      product={product}
                      name={product.name}
                      image={product.image}
                      hoverImage={product.hoverImage}
                      sizes={product.sizes}
                      category={product.category}
                      tags={product.tags}
                      price={product.price}
                      location={product.location}
                    />
                  ))}
                </Wrapper>
              }
            />
          </Routes>
        
        </Router>
        <Footer/>

      </section>
    </>
  );
};

export default App;
