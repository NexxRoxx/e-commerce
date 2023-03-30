import controllerImage from "../assets/xbox.jpg";
import MostSoldItem from "./MostSoldItem";
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { items } from "../../Resources/MostSoldItems";
import ProductCard from "./ChatGPTCard";

const MostSoldSection = () => {
  const [numberOfCards, setNumberOfCards] = useState(0);

  const iconsStyles = {
    size: "2.8rem",
  };

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1020px)").matches
  );
  const [matchesTwo, setMatchesTwo] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );

  useEffect(() => {
    window.matchMedia("(min-width: 1020px)").addEventListener("change", (e) => {
      setMatches(e.matches);
    });
    window.matchMedia("(min-width: 640px)").addEventListener("change", (e) => {
      setMatchesTwo(e.matches);
    });
  }, []);

  let cardsRender = 10;
  if (matchesTwo) {
    cardsRender = 3;
  }
  if (matches) {
    cardsRender = 5;
  }

  const clickRightHandler = () => {
    if (
      (numberOfCards === 5 && cardsRender === 5) ||
      (numberOfCards === 9 && cardsRender === 1)
    ) {
      return;
    }
    setNumberOfCards((prev) => prev + cardsRender);
  };

  const clickLeftHandler = () => {
    if (numberOfCards === 0) {
      return;
    }
    setNumberOfCards((prev) => prev - cardsRender);
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-600 w-full">
        <h1 className="text-2xl pl-2 pt-3 pb-4 text-white font-medium">
          {/* <h1 className="bg-slate-800 text-2xl pl-2 pt-3 pb-4 text-white font-medium"> */}
          MOST SOLD PRODUCTS
        </h1>
        <div className="flex overflow-x-auto overflow-y-hidden gap-4 lg:grid sm:grid-cols-3 lg:grid-cols-5 px-10 pb-10 relative shrink-0">
          {/* <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 px-10 pb-10 relative"> */}
          {/* <div className="bg-slate-800 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 px-10 pb-10 relative"> */}
          {items.map((item, index) => {
            if (index < numberOfCards + cardsRender && index >= numberOfCards) {
              return (
                <MostSoldItem
                  id={items[index].id}
                  img={items[index].img}
                  branch={items[index].branch}
                  product={items[index].productName}
                  stars={items[index].stars}
                  price={items[index].price}
                  delivery={items[index].delivery}
                  quantity={1}
                  key={index}
                />
                // <ProductCard
                //   image={items[index].img}
                //   brand={items[index].branch}
                //   name={items[index].productName}
                //   price={items[index].price}
                // />
              );
            } else {
              return;
            }
          })}
          {/* <BsChevronLeft
            className="absolute left-4 bottom-2/4 fill-slate-300 p-2 bg-gray-600 bg-opacity-60 cursor-pointer z-50 rounded-lg"
            onClick={clickLeftHandler}
          />
          <BsChevronRight
            className="absolute right-4 bottom-2/4 fill-slate-300 p-2 bg-gray-600 bg-opacity-60 cursor-pointer z-50 rounded-lg"
            onClick={clickRightHandler}
          /> */}
          <button className="hidden lg:flex items-center bg-gray-200 hover:bg-gray-300 rounded-xl p-2 absolute left-4 bottom-2/4 transform rotate-180 opacity-70">
            <svg
              className="w-6 h-6 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button className="hidden lg:flex items-center bg-gray-200 hover:bg-gray-300 rounded-xl p-2 absolute right-8 bottom-2/4 opacity-60">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default MostSoldSection;
