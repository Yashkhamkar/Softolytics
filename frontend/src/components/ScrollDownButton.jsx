import React from "react";
import scroll from "../assets/scroll-down.png";

const ScrollDownButton = () => {
  const handleScroll = () => {
    window.scroll({
      top: window.pageYOffset + 775,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-down">
      <div className="scroll-down-arrow" onClick={handleScroll}>
        {/* <div className="scroll-down-text">Scroll Down</div> */}
        <div className="scroll-down-img-container">
          <img className="scroll-down-img" src={scroll} alt="scroll down" />
        </div>
      </div>
    </div>
  );
};

export default ScrollDownButton;
