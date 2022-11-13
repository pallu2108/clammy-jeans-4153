import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent2";
import Dots from "./Dots2";
import Arrows from "./Arrows2";
import sliderImage from "./SliderImages";
import "./slider2.css";
import SliderImages from "./SliderImages";

const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 4);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      
      <Dots
        activeIndex={activeIndex}
        sliderImage={SliderImages}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
     
    </div>
  );
}

export default Slider;
