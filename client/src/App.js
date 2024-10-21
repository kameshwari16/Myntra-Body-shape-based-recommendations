import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Recommendations from './components/Recommendations';
import Home from "./components/Home";
import Cart from './components/Cart';
import Checkout from "./components/Checkout";

function App() {
  const styles = {
    sectionMargin: {
      marginTop: "5rem",
    },
  };
  return (
    <div>
      <Navbar/>
      {/* <Header /> */}

      <div style={styles.sectionMargin}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
