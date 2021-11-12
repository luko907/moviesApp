import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./DropDown.css";

export default function Dropdown() {
  const [haveText, setHaveText] = useState("");
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const url = `process.env.REACT_APP_GETGENRELIST`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setGenres(resp.data.genres.map((item) => item.name));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
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

  const handleText = (ev) => {
    setHaveText(ev.currentTarget.textContent);
  };

  const itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={handleText}
        className="dropdown__item"
        key={item.toString()}
      >
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };

  return (
    <div
      ref={myRef}
      className={!clickedOutside && isOpen ? "dropdown active" : "dropdown"}
      onClick={handleClick}
    >
      <div className="dropdown__text">{!haveText ? "Genres" : haveText}</div>
      {itemList(genres)}
    </div>
  );
}
/* export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      haveText: "",
    };
  }

  render() {
    const { isOpen, haveText } = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick}
      >
        <div className="dropdown__text">
          {!haveText ? "Select Race" : haveText}
        </div>
        {this.itemList(race)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent,
    });
  };

  itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={this.handleText}
        className="dropdown__item"
        key={item.toString()}
      >
        {item}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
} */
