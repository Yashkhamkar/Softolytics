import React, { useState, useRef, useEffect } from "react";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setDragX(e.pageX - sliderRef.current.offsetLeft - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragX > 100) {
      handlePrev();
    } else if (dragX < -100) {
      handleNext();
    }
    setDragX(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ transform: `translateX(${100 * (index - current)}%)` }}
        >
          <img src={slide.image} alt={slide.title} />
          <h2>{slide.title}</h2>
        </div>
      ))}
      <div className="arrow prev" onClick={handlePrev}>
        &#10094;
      </div>
      <div className="arrow next" onClick={handleNext}>
        &#10095;
      </div>
    </div>
  );
};

export default Slider;
