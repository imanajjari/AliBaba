import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useState } from "react";
import "./style.css";

export const Slider = ({images}) => {

  const slides = images
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };
  return (
    <>
      <div className="my-10">
        <div className="container">
          <div className="relative flex lg:px-8 items-center">
            <ArrowBackIosIcon
              className="absolute top-[50%] z-20 left-5 text-[35px] text-[#3c3c3c]"
              onClick={prevSlide}
            />
            <div className="slider-container">
              <div
                className="slider flex"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {slides.map((elem, index) => (
                  <div
                    className="slide w-full  flex"
                    key={index}
                  >
                    <img className="w-[100%] h-[100%] object-cove border-12 sm:rounded-none" src={elem} alt='img' />
                  </div>
                ))}
              </div>
            </div>
            <ArrowForwardIosIcon 
              className="absolute top-[50%] z-20 right-5 text-[35px] text-[#3c3c3c]"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </>
  );
}
