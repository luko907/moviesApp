import React, { useState, useEffect } from "react";
import "./DropdownYear.css";

export default function DropdownYear() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    return () => {};
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const itemList = (props) => {
    return <div className="dropdown__items">{/*   slider */}</div>;
  };

  return (
    <div
      className={isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="dropdown__text">Release date</div>
      {itemList()}
    </div>
  );
}
