import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Card from "./components/card/Card";
import products from "./datasource.json";
import Wrapper from "./components/wrapper/Wrapper";
class App extends Component {
  // Setting this.state.products to the products json array
  state = {
    products,
  };
  // Map over this.state.friends and render a Card component for each object
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/cart" />
            <Route
              path="/"
              element={
                <Wrapper>
                  {this.state.products.map((product) => (
                    <Card
                      key={product.id}
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
        <Cart />
      </div>
    );
  }
}
export default App;