import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { UserAuth } from "../contexts/AuthContext";

const FilterLinksElement = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { setFilterState }: any = UserAuth();
  const handleFilterChange = (event) => {
    setFilterState(event.target.textContent);
  };
  return (
    <>
      <button
        className={`p-4 ${
          isActive ? "bg-neutral-400" : "bg-neutral-200"
        } text-neutral-700 font-bold shadow-sm w-full text-start flex justify-between items-center hover:shadow-md hover:text-neutral-500`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        {props.headers} <FiChevronDown className="" />
      </button>
      <ul
        className={`flex flex-col gap-2 ${
          isActive ? "max-h-64 pl-8 pt-4 pb-2" : "max-h-0 overflow-hidden p-0"
        } josha`}
      >
        {props.categories.map((item, index) => {
          return (
            <li
              className="hover:font-bold cursor-pointer"
              key={index}
              onClick={handleFilterChange}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FilterLinksElement;
