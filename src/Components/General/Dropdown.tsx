import React from "react";
import "./Dropdown.css";
import { useState } from "react";

interface Props {
  options: string[];
}

const Dropdown = ({ options }: Props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className={`select ${isOpen ? "select-clicked" : ""}`} onClick={handleClick}>
        <span className="selected">{selectedOption}</span>
        <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
      </div>
      <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
        {options.map((option: string) => (
          <li
            key={option}
            className={option === selectedOption ? "active" : ""}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default function DropdownFunction() {
  const options = ["item 1", "item 2", "item 3", "item 4", "item 5"];

  return (
    <div className="d1">
      <Dropdown options={options} />
    </div>
  );
}
