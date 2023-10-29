import React from "react";

import star from "../../assets/star.svg";
import greystar from "../../assets/greystar.svg";

export default function Rating({ rating }) {
  const maxRating = 5;

  const stars = Array.from({ length: maxRating }, (_, index) => (
    <img
      key={index}
      src={index < rating ? star : greystar}
      alt="star"
      className="star-icon"
    />
  ));

  return <div className="rating-container">{stars}</div>;
}
