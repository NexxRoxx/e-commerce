import controllerImage from "../assets/xbox.jpg";
import MostSoldItem from "./MostSoldItem";
import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { items } from "../../Resources/MostSoldItems";

const MostSoldSection = () => {
  const [numberOfCards, setNumberOfCards] = useState(0);

  const iconsStyles = {
    size: "2.5rem",
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

  let cardsRender = 1;
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
      <h1 className="bg-slate-800 text-2xl pl-2 pt-3 pb-4 text-white font-medium">
        MOST SOLD PRODUCTS
      </h1>
      <div className="bg-slate-800 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 px-10 pb-10 relative">
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
            );
          } else {
            return;
          }
        })}
        <BsChevronLeft
          className="absolute left-4 bottom-2/4 fill-slate-300 p-2 bg-gray-600 bg-opacity-40 cursor-pointer z-50"
          onClick={clickLeftHandler}
        />
        <BsChevronRight
          className="absolute right-4 bottom-2/4 fill-slate-300 p-2 bg-gray-600 bg-opacity-40 cursor-pointer z-50"
          onClick={clickRightHandler}
        />
      </div>
    </IconContext.Provider>
  );
};

export default MostSoldSection;
