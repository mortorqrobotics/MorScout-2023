import React from "react";
import "./CommentBox.css";

function CommentBox() {
  return (
    <div className="CommentBox">
      <p>COMMENTS</p>
      <textarea cols={30} rows={10}></textarea>
    </div>
  );
}

export default CommentBox;
