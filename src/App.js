import { React, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Men from "./components/pages/Men.jsx";
import Contact from "./components/pages/Contact.jsx";
import Wishlist from "./components/pages/Wishlist";
import Women from "./components/pages/Women.jsx";
import Card from "./components/card/Card";
import products from "./datasource.json";
import Wrapper from "./components/wrapper/Wrapper";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Hero/Header.jsx";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart.jsx";
import {GlobalProvider} from '../src/components/pages/context/GlobalState'
import ProductPage from "./components/pages/ProductPage.jsx";
import SignUp from "./components/pages/SignUp.jsx";

const App = () => {
  
  const [isShowCart, setIsShowCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const findProductInCart = prev.find((item) => item.id === product.id);

      if (findProductInCart) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }

      return [...prev, { ...product, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      return prev.reduce((cal, item) => {
        if (item.id === id) {
          if (item.amount === 1) return cal;

          return [...cal, { ...item, amount: item.amount - 1 }];
        }

        return [...cal, { ...item }];
      }, []);
    });
  };

  return (
    <>
      <section className="bg-[#333]">
        <Router>
          <Navbar cart={cart} setIsShowCart={setIsShowCart} />
          <Routes>
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            {/* <Route path="/" element={<About />} /> */}
            <Route path="/wishlist" element={<Wishlist />}  />
        
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
           
               
           
            {/* Define a route that will have descendant routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/product-page/:id" element={<ProductPage />} />
            <Route path="/" element={
              <div>
                  <Header />
                  
                  <Wrapper>
                    <GlobalProvider>
                    {products.map((product) => (
                      <Card
                        handleAddToCart={handleAddToCart}
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
                    </GlobalProvider>
                    {isShowCart && (
                      <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleAddToCart={handleAddToCart}
                        setIsShowCart={setIsShowCart}
                      />
                    )}
                    
                  </Wrapper>
                </div>
                    
              }
            />
            
          </Routes>
        </Router>
        <Footer />
      </section>
       
    </>
   
  );
};

export default App;
