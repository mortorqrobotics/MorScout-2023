import React from "react";
import "./InputBox.css";
import type { FormEvent } from "react";

interface Props {
  onSubmit?: (value: string) => void;
  updateText: (value: string) => void;
}

function InputBox({ onSubmit, updateText }: Props) {
  let preventDefaultSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;
    let target = e.target as HTMLInputElement;
    onSubmit(target.value);
  };

  return (
    <form className="InputBox" onSubmit={preventDefaultSubmit}>
      <input type="text" onChange={(e) => updateText(e.target.value)} />
    </form>
  );
}

export default InputBox;
