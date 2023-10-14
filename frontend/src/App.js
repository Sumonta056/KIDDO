import React from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Home from "./components/Home/Home";
import Chat from "./components/ParentCommunity/Base";
import Test from "./components/Testify/Quiz";
import Consult from "./components/Consult/Base";
import Consult1 from "./components/Consult/Base1";
import Book from "./components/Books/BookList";
import Video from "./components/Video calling/VideoConference";
import ConsultHome from "./components/Consult/Home"
import Product from "./Pages/Product/App.js";
import PR from "./components/ProductRegistration/ProductRegistration"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/parentCommunity" element={<Chat />} />
        <Route path="/test" element={<Test />} />
        <Route path="/consult" element={<Consult />} />
        <Route path="/consult2" element={<Consult1 />} />
        <Route path="/Books" element={<Book />} />
        <Route path="/Video" element={<Video />} />
        <Route path="/consults" element={<ConsultHome />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productRe" element={<PR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
