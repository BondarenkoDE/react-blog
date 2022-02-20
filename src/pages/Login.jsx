import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Login = () => {
  const navigate = useNavigate();
  const [fields, setFields] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(
      `https://mentor.archakov.im/api/mock/login?email=${fields.email}&password=${fields.password}`
    );

    if (resp.ok) {
      const { token } = await resp.json();

      window.localStorage.setItem("token", token);

      navigate("/profile");
    } else {
      alert("Ошибка! Неверный почат или пароль");
    }
  };

  const handleChangeInput = (event) => {
    setFields((fields) => ({
      ...fields,
      [event.target.name]: event.target.value,
    }));

    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  console.log(fields);

  return (
    <Form onSubmit={onSubmit} className="login-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={fields.email}
          onChange={handleChangeInput}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={fields.password}
          onChange={handleChangeInput}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};
