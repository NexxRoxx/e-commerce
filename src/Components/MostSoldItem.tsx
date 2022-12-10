import { BsCartPlus } from "react-icons/bs";
import { IconContext } from "react-icons";

const MostSoldItem = (props: any) => {
  const iconsStyles = {
    size: "1.5rem",
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      {/* <div className=" h-96 w-36 flex flex-col relative shadow-sm shadow-white bg-slate-400 rounded-sm hover:shadow-lg"> */}
      <div className=" h-96 w-56 flex flex-col relative shadow-sm shadow-white bg-slate-400 rounded-sm hover:shadow-lg">
        <img src={props.img} alt="controller" className="h-3/5" />
        <span className=" text-white opacity-40 text-sm pb-2 pl-2">
          {props.branch}
        </span>
        <a
          href="#"
          className=" text-md text-blue-800 font-bold pl-2 cursor-pointer"
        >
          {props.product}
        </a>
        <span className="pl-2">{props.stars}</span>
        <span className="font-bold text-sm text-yellow-100 pl-2">
          {props.price}
        </span>
        <span className=" absolute bottom-2 right-4 bg-slate-900 rounded-full p-2 shadow-sm shadow-black opacity-70 pl-2 hover:bg-slate-800">
          <BsCartPlus className="fill-blue-800 cursor-pointer" />
        </span>
        <span className="text-yellow-100 pt-2 pl-2">{props.delivery}</span>
      </div>
    </IconContext.Provider>
  );
};

export default MostSoldItem;
