import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPost } from "./components/FullPost";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h1>СТраница авторизации</h1>} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="*" element={<h1>Страница не найдена!</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
