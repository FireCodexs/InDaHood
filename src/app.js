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
    );
  }
}

export default App;
