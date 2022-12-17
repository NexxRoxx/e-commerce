import { FiChevronDown } from "react-icons/fi";
import { IconContext } from "react-icons";

const FiltersLinks = () => {
  const iconsStyles = {
    size: "1.5rem",
    color: "black",
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      <div className="w-1/5 hidden lg:block">
        <button className="p-4 bg-neutral-200 text-neutral-700 font-bold shadow-sm w-full text-start flex justify-between items-center hover:shadow-md hover:text-neutral-500">
          Components <FiChevronDown className="" />
        </button>
        <ul className="flex flex-col gap-2 pl-8 pt-4 pb-2">
          <li className="hover:font-bold">
            <a href="#">Motherboard</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">CPUs</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Storage</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Graphic Cards</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">RAM</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Power Supply</a>
          </li>
        </ul>
        <button className="p-4 bg-neutral-200 text-neutral-700 font-bold shadow-lg w-full text-start flex justify-between items-center">
          Accessories <FiChevronDown className="" />
        </button>
        <ul className="flex flex-col gap-2 pl-8 pt-4 pb-2">
          <li className="hover:font-bold">
            <a href="#">Keyboards</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Mouse</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Web Cams</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Headphones</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Speakers</a>
          </li>
        </ul>
        <button className="p-4 bg-neutral-200 text-neutral-700 font-bold shadow-lg w-full text-start flex justify-between items-center">
          Brands <FiChevronDown className="" />
        </button>
        <ul className="flex flex-col gap-2 pl-8 pt-4 pb-2">
          <li className="hover:font-bold">
            <a href="#">AMD</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Intel</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Asus</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">LG</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Samsung</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Nvidia</a>
          </li>
          <li className="hover:font-bold">
            <a href="#">Kingston</a>
          </li>
        </ul>
      </div>
    </IconContext.Provider>
  );
};

export default FiltersLinks;
