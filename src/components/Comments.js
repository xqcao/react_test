import React, { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  const [commentList, setCommentList] = useState([]);
  const [pages, setPages] = useState(0);
  const eachShow = 55;

  const [start, setStart] = useState(0);
  const getComments = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );

    setCommentList(res.data);
  };
  useEffect(() => {
    getComments();
    console.log("hello");
  }, []);
  const onClickNextRange = () => {
    if (pages + 1 > commentList.length / eachShow) {
      setPages(0);
    } else {
      setPages((p) => p + 1);
    }
    if (start + eachShow >= commentList.length) {
      setStart(0);
    } else {
      setStart((p) => p + eachShow);
    }
  };
  const onClickPreviousRange = () => {
    if (start - eachShow <= 0) {
      setStart(0);
    } else {
      setStart((p) => p - eachShow);
    }
    if (pages - 1 <= 0) {
      setPages(0);
    } else {
      setPages((p) => p - 1);
    }
  };
  return (
    <div>
      <h2>Comments</h2>
      <ol>
        {commentList
          .filter((comment, idx) => idx >= start && idx < start + eachShow)
          .map((comment, idx) => (
            <li key={comment.id}>
              id: {comment.id} <br />
              Name: {comment.name}
              <br />
              Email: {comment.email}
              <br />
              Body: {comment.body}
            </li>
          ))}
      </ol>
      <div>
        <button onClick={onClickPreviousRange}>previous {eachShow}</button>
        <button onClick={onClickNextRange}>
          Next {eachShow} page # {pages}
        </button>
        <p>
          Show page: {start} to {start + eachShow} comments total:{" "}
          {commentList.length}
        </p>
      </div>
    </div>
  );
};

export default Comments;
