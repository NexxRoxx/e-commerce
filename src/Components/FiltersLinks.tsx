import { IconContext } from "react-icons";
import FilterLinksElement from "./FilterLinksElement";

const FiltersLinks = () => {
  const iconsStyles = {
    size: "1.5rem",
    color: "black",
  };
  const filterHeaders = ["Components", "Accessories", "Brands"];
  const filterCategories = [
    ["Motherboard", "CPUs", "Storage", "Graphic Cards", "RAM", "Power Supply"],
    ["Keyboards", "Mouse", "Web Cams", "Headphones", "Speakers"],
    ["AMD", "Intel", "Asus", "LG", "Samsung", "Nvidia", "Kingston"],
  ];
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="w-1/5 hidden lg:block">
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
    </IconContext.Provider>
  );
};

export default FiltersLinks;
