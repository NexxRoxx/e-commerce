import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { items } from "../Resources/MostSoldItems";

const Slider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
    // slider!.scrollLeft = slider!.scrollLeft - slider!.scrollLeft / 2;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
    // slider!.scrollLeft = slider!.scrollLeft + slider!.scrollLeft * 2;
  };

  return (
    <>
      <div className="relative flex items-center w-[90vw] h-[50vh] lg:w-[60vw] lg:h-[60vh]">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white lg:overflow-hidden"
        >
          {items.map((item) => (
            <img
              className="w-full h-full inline-block object-contain p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default Slider;
