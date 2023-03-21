import { BiChevronRight } from "react-icons/bi";
import { UserAuth } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";

const OurProductsItems = (props: any) => {
  const { setFilterState }: any = UserAuth();
  return (
    <div className="relative w-full overflow-hidden shadow-sm">
      <img
        src={props.image}
        alt=""
        className="h-full w-full shadow-sm brightness-50 opacity-85 transition-all ease-in-out duration-300 hover:brightness-75 hover:opacity-95"
      />
      <div className="absolute flex flex-col gap-2 left-4 top-4 lg:top-8 lg:w-full lg:justify-center lg:items-center h-full lg:h-auto">
        <h1 className="text-cyan-300 text-3xl sm:text-5xl">{props.title}</h1>
        <h4 className=" text-white text-xs w-96 pr-12 lg:pr-0 sm:text-lg lg:text-center">
          {props.description}
        </h4>
        {/* <a
          href="#"
          className="flex text-white text-md border-b-2 border-cyan-300 shadow-md transition-all ease-in-out duration-300 hover:text-cyan-300 place-self-end absolute left-2 bottom-8 lg:static lg:place-self-center sm:text-lg"
        >
          Learn more
          <BiChevronRight className="fill-cyan-300" />
        </a> */}
        <NavLink
          to="/shop"
          onClick={() => setFilterState(props.title)}
          className="flex items-center text-white text-md border-b-2 border-cyan-300 shadow-md transition-all ease-in-out duration-300 hover:text-cyan-300 place-self-end absolute left-2 bottom-8 lg:static lg:place-self-center sm:text-lg"
        >
          Learn more
          <BiChevronRight className="fill-cyan-300" />
        </NavLink>
      </div>
    </div>
  );
};
// lg:right-2/4 lg:translate-x-2/4
export default OurProductsItems;
