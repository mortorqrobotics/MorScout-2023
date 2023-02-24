import React from "react";
import "./CommentBox.css";

function CommentBox() {
  return (
    <div className="CommentBox">
      <p>COMMENTS</p>
      <textarea placeholder="Your comments..."></textarea>
    </div>
  );
}

export default CommentBox;
