import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header">
      <Link to="/">
        <h2>React Blog</h2>
      </Link>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link to="/" as={Link} active={pathname === "/"}>
            Главная
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/about" as={Link} active={pathname === "/about"}>
            Обо мне
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" as={Link} active={pathname === "/login"}>
            Войти
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
