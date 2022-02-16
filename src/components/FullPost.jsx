import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { posts } from "../pages/Home";

export const FullPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find((obj) => obj.id === Number(id));

  if (!post) {
    setTimeout(() => {
      navigate("/");
    }, 3000);

    return <h1>Статья не найдена</h1>;
  }

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt="image" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
