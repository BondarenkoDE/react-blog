import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";

export const Header = () => {
  const [isAuth, setIsAuth] = React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [pathname]);

  const handleClickAuth = () => {
    if (isAuth && window.confirm("Вы действительно хотите выйти?")) {
      window.localStorage.removeItem("token");
      navigate("/");
      setIsAuth(false);
    } else {
      navigate("/login");
    }
  };

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

        <Button variant={isAuth ? "danger" : "dark"} onClick={handleClickAuth}>
          {isAuth ? "Выйти" : "Войти"}
        </Button>
      </Nav>
    </div>
  );
};
