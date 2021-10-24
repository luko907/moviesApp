import React from "react";
import { getMovies } from "../../actions";
import { connect } from "react-redux";

function All(props) {
  props.getMovies();

  return <div></div>;
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: () => dispatch(getMovies()),
  };
}

export default connect(null, mapDispatchToProps)(All);
