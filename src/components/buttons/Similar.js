import React, { useContext } from "react";
import { Link } from "react-router-dom";

const SimilarButton = ({ movie }) => {
  return (
    <Link
    className="btn w-100 btn-primary "
    to={{
      pathname: `/movies/similarMovie/${movie.id}`
    }}
  >
    Similar
  </Link>)
};

export default SimilarButton;