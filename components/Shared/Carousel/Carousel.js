import React, { useState } from "react";
import Arrow from "./Arrow";

const Carousel = ({
  name,
  changeSelectedCanva,
  selectedCanva,
  canvasLength,
  children
}) => {
  const [translation, setTranslation] = useState(0);

  function slide(direction) {
    const slideList = document.querySelector(`#slide-list-${name}`);
    const sliderCardWidth = slideList.scrollWidth / slideList.childElementCount;

    let newTranslation;

    if (
      selectedCanva + direction >= 0 &&
      selectedCanva + direction < canvasLength
    ) {
      changeSelectedCanva(selectedCanva + direction);
    }

    if (direction > 0) {
      newTranslation = Math.min(
        translation + sliderCardWidth,
        slideList.scrollWidth - slideList.clientWidth
      );
    } else {
      newTranslation = Math.max(translation - sliderCardWidth, 0);
    }

    setTranslation(newTranslation);
  }

  return (
    <div id={`slider-container-${name}`} className="carousel">
      <Arrow direction={-1} slide={slide} />
      <div className="pos-relative flex-1" style={{ overflow: "hidden" }}>
        <div
          id={`slide-list-${name}`}
          className="d-flex"
          style={{
            transform: `translate(${-translation}px)`,
            transition: "all 0.2s ease-in-out"
          }}
        >
          {children}
        </div>
      </div>
      <Arrow direction={1} slide={slide} />
    </div>
  );
};

export default Carousel;
