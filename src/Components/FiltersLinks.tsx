import { IconContext } from "react-icons";
import FilterLinksElement from "./FilterLinksElement";
import { useEffect, useState } from "react";

const FiltersLinks = () => {
  const iconsStyles = {
    size: "1.5rem",
    color: "black",
  };
  const [matchesTwo, setMatchesTwo] = useState(
    window.matchMedia("(min-width: 640px)").matches
  );
  useEffect(() => {
    window.matchMedia("(min-width: 640px)").addEventListener("change", (e) => {
      setMatchesTwo(e.matches);
    });
  }, []);
  const filterHeaders = ["Components", "Accessories", "Brands"];
  const filterCategories = [
    ["Motherboard", "CPUs", "Storage", "Graphic Cards", "RAM", "Power Supply"],
    ["Keyboards", "Mouse", "Web Cams", "Headphones", "Speakers"],
    ["AMD", "Intel", "Asus", "LG", "Samsung", "Nvidia", "Kingston"],
  ];
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="w-auto lg:w-1/5 flex bg-gray-200">
        <div
          className={`${matchesTwo ? "block" : "hidden w-0 overflow-hidden"}`}
        >
          {filterHeaders.map((item, index) => {
            return (
              <FilterLinksElement
                headers={item}
                categories={filterCategories[index]}
                key={index}
              />
            );
          })}
        </div>
        <button
          className="self-start flex items-center bg-gray-200 hover:bg-gray-300 rounded-xl p-2"
          onClick={() => setMatchesTwo((prev) => !prev)}
        >
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
    </IconContext.Provider>
  );
};

export default FiltersLinks;
