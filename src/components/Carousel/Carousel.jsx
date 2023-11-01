import { useState } from "react";
import left from "../../assets/arrow-left.svg";
import right from "../../assets/arrow-right.svg";

export default function Carousel({ slides }) {
  if (!slides || slides.length === 0) {
    return null;
  }

  const length = slides.length;
  const [displayedSlide, setDisplayedSlide] = useState(0);

  const previousSlide = () => {
    setDisplayedSlide((displayedSlide - 1 + length) % length);
  };

  const nextSlide = () => {
    setDisplayedSlide((displayedSlide + 1) % length);
  };

  return (
    <div className="carousel_wrap">
      <p className="counter">{displayedSlide + 1} / {length}</p>
      {length > 1 && (
        <img
          src={left}
          alt="Previous"
          onClick={previousSlide}
          className="arrow_left"
        />
      )}
      <div className="slide">
        
        <img src={slides[displayedSlide]} alt={`Slide ${displayedSlide + 1}`} />
      </div>
      {length > 1 && (
        <img
          src={right}
          alt="Next"
          onClick={nextSlide}
          className="arrow_right"
        />
      )}
    </div>
  );
}
