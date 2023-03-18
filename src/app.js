import React, { useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/card/Card";
import products from "./datasource.json";
import Wrapper from "./components/wrapper/Wrapper";
import Cart from "./components/cart/Cart";

const App = () => {
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);
  // const [warning, setWarning] = useState(false);

  // const handleClick = (product) => {
  //   console.log(product);

  //   cart.forEach((product) => {
  //     if (item.id === product.id) {
  //       isPresent = true;
  //     }
  //   });
  //   if (isPresent) {
  //     setWarning(true);
  //     setTimeout(() => {
  //       setWarning(false);
  //     }, 2000);
  //     return;
  //   }
  //   setCart([...cart, product]);
  // };

  return (
    <section className="h-screen bg-gray-100">
      {/* <Cart /> */}
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
                    // handleClick={handleClick}
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
