import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Single from "./pages/single";


const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robot/:id" element={<Single />} />
        </Routes>
      <Footer/>
    </>
  );
};
export default App;
