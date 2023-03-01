import React from "react";
import "./CommentBox.css";

interface Props {
  useLabel?: boolean;
  onChange?: (newValue: string) => void;
  defaultValue?: string;
}

function CommentBox({ useLabel = true, onChange = () => {}, defaultValue }: Props) {
  return (
    <div className="CommentBox">
      {useLabel ? <p>COMMENTS</p> : <></>}
      <textarea
        placeholder="Your comments..."
        value={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default CommentBox;
