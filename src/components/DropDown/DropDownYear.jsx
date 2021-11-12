import React, { useState, useEffect, useRef } from "react";
import "./DropDown.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      setClickedOutside(false);
      setIsOpen(false);
    };
  }, [clickedOutside]);
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };
  const handleClick = () => {
    setClickedOutside(false);
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={myRef}
      className={!clickedOutside && isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="dropdown__text">Release date</div>
    </div>
  );
}
