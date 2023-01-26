import { items } from "../../Resources/MostSoldItems";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useState } from "react";

const SecondSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgHoverActive, setImgHoverActive] = useState(0);
  const imgHandler = (index: any, type: any) => {
    if (type === "click") {
      setImgIndex(index);
    } else if (type === "mouseenter") {
      setImgHoverActive(index);
    } else if (type === "mouseleave") {
      setImgHoverActive(0);
    } else if (type === "previous") {
      setImgIndex((prev) => (prev !== 0 ? prev - 1 : prev));
    } else if (type === "next") {
      setImgIndex((prev) => (prev !== 5 ? prev + 1 : 0));
    }
  };
  return (
    <div className="flex flex-col lg:flex-row gap-2 h-[75vh] w-full overflow-hidden select-none">
      <div className="order-2">
        <ul className="flex gap-1 lg:block">
          {items.map((item, index) => {
            if (index <= 5) {
              return (
                <li className="h-16 w-16">
                  <img
                    src={item.img}
                    alt=""
                    className={`w-full h-full p-1 object-contain bg-white border-y-2 border-slate-800 hover:border-2 hover:border-yellow-400 rounded-lg ${
                      imgIndex === index
                        ? "border-2 border-yellow-400 shadow-lg"
                        : ""
                    } transition-all ease-in-out duration-500`}
                    onClick={(e) => imgHandler(index, e.type)}
                    onMouseEnter={(e) => imgHandler(index, e.type)}
                    onMouseLeave={(e) => imgHandler(index, e.type)}
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="h-full w-full select-none">
        <div className="h-full relative">
          <MdChevronLeft
            className="opacity-50 cursor-pointer hover:opacity-100 select-none lg:block bg-slate-400 rounded-md absolute left-2 top-2/4 -translate-y-2/4"
            onClick={() => imgHandler(null, "previous")}
            size={40}
          />
          <img
            src={
              imgHoverActive ? items[imgHoverActive].img : items[imgIndex].img
            }
            alt=""
            className="w-full h-full object-contain bg-white rounded-lg p-20"
          />
          <MdChevronRight
            className="opacity-50 cursor-pointer hover:opacity-100 select-none lg:block bg-slate-400 rounded-md absolute right-2 top-2/4 -translate-y-2/4"
            onClick={() => imgHandler(null, "next")}
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondSlider;
