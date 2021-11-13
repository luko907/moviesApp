import React, { useState, useEffect, useRef } from "react";
import "./Dropyear.css";
import Slider from "./ReactSlider.jsx";

export default function Dropyear() {
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
  const itemList = () => {
    return (
      <div className="dropdownYear__items">
        <Slider />
      </div>
    );
  };

  return (
    <div
      ref={myRef}
      className={
        !clickedOutside && isOpen ? "dropdownYear active" : "dropdownYear"
      }
      onClick={handleClick}
    >
      <div className="dropdownYear__text">Release date</div>
      {itemList()}
    </div>
  );
}
