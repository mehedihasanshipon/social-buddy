import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comments from "../Comments/Comments";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComment] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);
  console.log()
  return (
    <div>
      <h2>This is post Detail: {id} </h2>
      <h3>Title: {post.title} </h3>
      <p>{post.body}</p>
      <p> Numbers of comments: {comments.length}</p>
      <div className = "row">
      {
          comments.map(comment => <Comments comment={comment} />)
      }
      </div>
    </div>
  );
};

export default PostDetail;
