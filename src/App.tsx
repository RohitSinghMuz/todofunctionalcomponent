import React from "react";
import Home from "./Home";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Header from "./Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
