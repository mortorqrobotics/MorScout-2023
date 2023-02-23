import React from "react";
import "./Heading.css";

interface Props {
  children: string;
}

function Heading({ children: headingText }: Props) {
  return (
    <div className="Heading">
      <hr />
      <p>{headingText}</p>
      <hr />
    </div>
  );
}

export default Heading;
