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
  const nextSlideHandler = () => {
    if (modalIndex < 2) {
      setModalIndex((prev) => prev + 1);
    } else {
      setModalIndex(0);
    }
  };
  const previousSlideHandler = () => {
    if (modalIndex > 0) {
      setModalIndex((prev) => prev - 1);
    } else {
      setModalIndex(2);
    }
  };
  const sliderImages = [
    <div
      className={`h-full w-full absolute ${
        modalIndex === 1
          ? "-translate-x-full opacity-0"
          : modalIndex === 2
          ? "translate-x-full opacity-0"
          : modalIndex === 0
          ? "translate-x-0"
          : ""
      } transition-all ease-in-out duration-300`}
    >
      <img
        className="object-cover h-full w-full brightness-75 aspect-[3/2]"
        src={graphicCard}
        alt="Image of anXbox One Controller"
      />
    </div>,
    <div
      className={`h-full w-full absolute ${
        modalIndex === 2
          ? "-translate-x-full opacity-0"
          : modalIndex === 0
          ? "translate-x-full opacity-0"
          : modalIndex === 1
          ? "translate-x-0"
          : ""
      } transition-all ease-in-out duration-300`}
    >
      <img
        className="object-cover h-full w-full brightness-75 aspect-[3/2]"
        src={cpu}
        alt="Image of anXbox One Controller"
      />
    </div>,
    <div
      className={`h-full w-full absolute ${
        modalIndex === 0
          ? "-translate-x-full opacity-0"
          : modalIndex === 1
          ? "translate-x-full opacity-0"
          : modalIndex === 2
          ? "translate-x-0"
          : ""
      } transition-all ease-in-out duration-300`}
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
      <div className="bg-slate-800 h-[60vh] lg:h-[70vh] ">
        <div className="h-full bg-slate-800 ">
          <div className="relative h-full overflow-hidden brightness-75">
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
