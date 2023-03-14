import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const Home = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }, []);
  return (
    <>
      <div className="Home" id="home">
        hi
      </div>
    </>
  );
};

export default Home;
