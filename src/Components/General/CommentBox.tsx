import React from "react";
import "./CommentBox.css";

interface Props {
  useLabel?: boolean;
  onChange?: (newValue: string) => void;
}

function CommentBox({ useLabel = true, onChange = () => {} }: Props) {
  return (
    <div className="CommentBox">
      {useLabel ? <p>COMMENTS</p> : <></>}
      <textarea
        placeholder="Your comments..."
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default CommentBox;
