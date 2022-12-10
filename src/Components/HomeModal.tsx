import xbox from "../assets/xbox.jpg";
import cpu from "../assets/cpu.jpg";
import graphicCard from "../assets/graphicCard.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from "react";

const HomeModal = () => {
  const iconsStyles = {
    size: "4rem",
  };

  const [modalIndex, setModalIndex] = useState(0);
  const [slideEffect, setSlideEffect] = useState("");

  const nextSlideHandler = () => {
    setSlideEffect("-right-full");
    if (modalIndex < 2) {
      setModalIndex((prev) => prev + 1);
    } else {
      setModalIndex(0);
    }
  };
  const previousSlideHandler = () => {
    setSlideEffect("-left-full");
    if (modalIndex > 0) {
      setModalIndex((prev) => prev - 1);
    } else {
      setModalIndex(2);
    }
  };
  const sliderImages = [
    <div
      className={`h-full w-full absolute ${
        modalIndex === 0
          ? "left-0 right-0"
          : `${modalIndex === 2 ? "-left-full" : "-right-full"}`
      } transition-all ease-in-out duration-500`}
    >
      <img
        className="object-cover h-full w-full brig brightness-75"
        src={graphicCard}
        alt="Image of anXbox One Controller"
      />
    </div>,
    <div
      className={`h-full w-full absolute ${
        modalIndex === 1
          ? "left-0 right-0"
          : `${modalIndex === 0 ? "-left-full" : "-right-full"}`
      } transition-all ease-in-out duration-500`}
    >
      <img
        className="object-cover h-full w-full brightness-75"
        src={cpu}
        alt="Image of anXbox One Controller"
      />
    </div>,
    <div
      className={`h-full w-full absolute ${
        modalIndex === 2
          ? "left-0 right-0"
          : `${modalIndex === 1 ? "-left-full" : "-right-full"}`
      } transition-all ease-in-out duration-500`}
    >
      <img
        className="object-cover h-full w-full brightness-75"
        src={xbox}
        alt="Image of anXbox One Controller"
      />
    </div>,
  ];
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="bg-red-800 h-5/6 ">
        <div className="h-full bg-amber-400">
          <div className="relative h-full overflow-hidden">
            <>
              {sliderImages.map((item, index) => {
                return item;
              })}
            </>
            <BsChevronLeft
              className="absolute bottom-2/4 cursor-pointer opacity-75 fill-white  hover:opacity-100"
              onClick={previousSlideHandler}
            />
            <BsChevronRight
              className="absolute bottom-2/4 right-0 cursor-pointer opacity-75 fill-white hover:opacity-100"
              onClick={nextSlideHandler}
            />
            <div className="flex gap-4 absolute bottom-4 right-2/4 translate-x-2/4">
              <div
                className={`h-1 w-8 ${
                  modalIndex === 0 ? "bg-black" : "bg-slate-400"
                } cursor-pointer`}
                onClick={() => setModalIndex(0)}
              ></div>
              <div
                className={`h-1 w-8 ${
                  modalIndex === 1 ? "bg-black" : "bg-slate-400"
                } cursor-pointer`}
                onClick={() => setModalIndex(1)}
              ></div>
              <div
                className={`h-1 w-8 ${
                  modalIndex === 2 ? "bg-black" : "bg-slate-400"
                } cursor-pointer`}
                onClick={() => setModalIndex(2)}
              ></div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default HomeModal;
