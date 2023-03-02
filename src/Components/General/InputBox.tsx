import React from "react";
import "./InputBox.css";
import type { FormEvent } from "react";

type inputMode =
  | "text"
  | "search"
  | "email"
  | "tel"
  | "url"
  | "none"
  | "numeric"
  | "decimal"
  | undefined;

interface Props {
  onSubmit?: (value: string) => void;
  updateText: (value: string) => void;
  defaultValue?: string;
  inputmode?: inputMode;
}

function InputBox({ onSubmit, updateText, defaultValue, inputmode = "text" }: Props) {
  /**
   * Not working, runs on submit but argument is undefined.
   * Can be used to tell when enter is pressed but use updateText and useState to get the value
   */
  let preventDefaultSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!onSubmit) return;
    let target = e.target as HTMLFormElement;
    onSubmit(target.value);
  };

  return (
    <form className="InputBox" onSubmit={preventDefaultSubmit}>
      <input
        type="text"
        onChange={(e) => updateText(e.target.value)}
        value={defaultValue}
        inputMode={inputmode}
      />
    </form>
  );
}

export default InputBox;
