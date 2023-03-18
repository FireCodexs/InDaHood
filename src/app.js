import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Card from "./components/card/Card";
import products from "./datasource.json";
import Wrapper from "./components/wrapper/Wrapper";

const App = () => {
  return (
    <section className="h-screen bg-gray-100">
      <Cart />
      <Router>
        <Routes>
          <Route path="/cart" />
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
    </section>
  );
};

export default App;
