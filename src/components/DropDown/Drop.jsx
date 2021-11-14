import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Drop.css";
import { getGenre, getReset } from "../../actions/index";

function Drop(props) {
  const [haveText, setHaveText] = useState("");
  const [idGenre, setIdGenre] = useState(null);
  const [genres, setGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOutside, setClickedOutside] = useState(true);
  const myRef = useRef();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=715369ad83702bbb01d37884acb031ed&language=en-US`;
    const fetchData = async () => {
      try {
        const resp = await axios.get(url);
        setGenres(resp.data.genres);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    document.addEventListener("mousedown", handleClickOutside);

    props.getGenre(idGenre);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedOutside, props, idGenre]);
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
    setIdGenre(ev.currentTarget.id);
    setHaveText(ev.currentTarget.textContent);
    props.getReset();
  };

  const itemList = (props) => {
    const list = props.map((item) => (
      <div
        onClick={handleText}
        id={item.id}
        className="dropdown__item"
        key={item.id}
      >
        {item.name}
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

function mapDispatchToProps(dispatch) {
  return {
    getGenre: (id) => dispatch(getGenre(id)),
    getReset: () => dispatch(getReset()),
  };
}

export default connect(null, mapDispatchToProps)(Drop);
