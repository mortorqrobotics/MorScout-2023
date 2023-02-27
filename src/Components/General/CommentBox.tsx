import React from "react";
import "./CommentBox.css";

interface Props {
  useLabel?: boolean;
}

function CommentBox({ useLabel = true }: Props) {
  return (
    <div className="CommentBox">
      {useLabel ? <p>COMMENTS</p> : <></>}
      <textarea placeholder="Your comments..."></textarea>
    </div>
  );
}

export default CommentBox;
