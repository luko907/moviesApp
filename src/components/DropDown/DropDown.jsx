import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Dropdown.css";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [haveText, setHaveText] = useState("");
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=715369ad83702bbb01d37884acb031ed&language=en-US`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setGenres(resp.data.genres.map((item) => item.name));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
    return () => {};
  }, []);

  const handleClick = () => {
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
      className={isOpen ? "dropdown active" : "dropdown"}
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
