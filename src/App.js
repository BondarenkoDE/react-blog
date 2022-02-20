import React from "react";
import { Routes, Route } from "react-router-dom";
import { FullPost } from "./components/FullPost";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="post/:id" element={<FullPost />} />
          <Route path="profile" element={<Profile />} />

          {/* Роут на страницу 404 */}
          <Route path="*" element={<h1>Страница не найдена!</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
