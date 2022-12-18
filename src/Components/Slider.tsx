import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { items } from "../Resources/MostSoldItems";
import LittleSlider from "./LittleSlider";
import { useState } from "react";

const Slider = () => {
  const [modalIndex, setModalIndex] = useState(0);
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    let sliderWidth = slider!.offsetWidth;
    slider!.scrollLeft = slider!.scrollLeft - sliderWidth;
    modalIndex !== 0 ? setModalIndex((prev) => prev - 1) : 0;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    let sliderWidth = slider!.offsetWidth;
    slider!.scrollLeft = slider!.scrollLeft + sliderWidth;
    setModalIndex((prev) => prev + 1);
  };

  const activeSliderLeft = (difference: any) => {
    let slider = document.getElementById("slider");
    let ind = modalIndex + 1;
    let sliderWidth = slider!.offsetWidth * difference;
    slider!.scrollLeft = slider!.scrollLeft - sliderWidth;
    setModalIndex(difference);
    console.log("HI LEFT", modalIndex);
  };
  const activeSliderRight = (difference: any) => {
    let slider = document.getElementById("slider");
    let ind = modalIndex + 1;
    let sliderWidth = slider!.offsetWidth * difference;
    slider!.scrollLeft = slider!.scrollLeft + sliderWidth;
    setModalIndex(difference);
    console.log("HI RIGHT", modalIndex);
  };

  return (
    <>
      <div className="relative flex items-center w-[90vw] h-[50vh] lg:w-[60vw] lg:h-[60vh]">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block translate-x-12 bg-slate-400 rounded-md z-30"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white bg-opacity-20 lg:overflow-hidden"
        >
          {items.map((item) => (
            <img
              className="w-full h-full inline-block bg-white object-contain p-2 lg:p-10 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block -translate-x-12 bg-slate-400 rounded-md"
          onClick={slideRight}
          size={40}
        />
      </div>
      <LittleSlider
        leftSlide={activeSliderLeft}
        rightSlide={activeSliderRight}
        indice={modalIndex}
        setIndice={setModalIndex}
      />
    </>
  );
};

export default Slider;
