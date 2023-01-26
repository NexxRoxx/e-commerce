import { items } from "../../Resources/MostSoldItems";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";

const LittleSlider = (props: any) => {
  //   const slideLeft = () => {
  //     let slider = document.getElementById("miniSlider");
  //     let sliderWidth = slider!.offsetWidth;
  //     slider!.scrollLeft = slider!.scrollLeft - 300;
  //   };

  //   const slideRight = () => {
  //     let slider = document.getElementById("miniSlider");
  //     let sliderWidth = slider!.offsetWidth;
  //     slider!.scrollLeft = slider!.scrollLeft + 300;
  //   };

  const imgHandlerFunction = (index: any) => {
    if (index !== props.indice && index < props.indice) {
      const num = index - props.indice;
      props.leftSlide(num);
    } else if (index !== props.indice && index > props.indice) {
      const num = index - props.indice;
      props.rightSlide(index);
    }
  };
  return (
    <div className="lg:w-[55vw] lg:h-[30vh] p-1 overflow-hidden relative">
      <MdChevronLeft
        className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block translate-x-12 bg-slate-400 rounded-md absolute -left-10 top-1/4 translate-y-2/4 z-30"
        // onClick={slideLeft}
        size={40}
      />
      <div
        id="miniSlider"
        className="flex bg-slate-400 bg-opacity-30 overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {items.map((item, index) => (
          <img
            className={`w-44 h-44 border-2 border-slate-800 bg-white inline-block object-contain p-2 lg:p-10 cursor-pointer hover:scale-105 ease-in-out duration-300 ${
              index === props.indice ? " opacity-70" : ""
            }`}
            src={item.img}
            alt="/"
            onClick={() => imgHandlerFunction(index)}
          />
        ))}
      </div>
      <MdChevronRight
        className="opacity-50 cursor-pointer hover:opacity-100 hidden lg:block -translate-x-12 bg-slate-400 rounded-md absolute -right-10 top-1/4 translate-y-2/4"
        // onClick={slideRight}
        size={40}
      />
    </div>
  );
};

export default LittleSlider;
