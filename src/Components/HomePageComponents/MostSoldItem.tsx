import { BsCartPlus } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { NavLink } from "react-router-dom";

const MostSoldItem = (props: any) => {
  const iconsStyles = {
    size: "1.5rem",
  };

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        img: props.img,
        branch: props.branch,
        productName: props.product,
        stars: props.stars,
        price: props.price,
        delivery: props.delivery,
        quantity: props.quantity,
      })
    );
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      {/* <div className="h-[60vh] lg:h-[80vh] flex flex-col relative border-2 bg-white shadow-black rounded-lg hover:shadow-md"> */}
      <div className="h-[60vh] lg:h-[60vh] flex flex-col relative bg-[#dfdefa] hover:shadow-md lg:w-11/12 w-5/6 shrink-0">
        <img
          src={props.img}
          alt="controller"
          className="h-2/5 lg:h-2/5 w-full object-contain bg-white p-4"
          // className="h-2/5 lg:h-3/5 w-full p-2 lg:p-10 object-contain bg-white"
        />
        <div className="flex flex-col bg-neutral-900 h-3/5 p-4 rounded-t-lg">
          <span className=" text-neutral-300  text-sm pb-2 pl-2">
            {props.branch}
          </span>
          <NavLink
            to={`/detail/${props.product}`}
            className=" text-md text-blue-700 font-medium pl-2 cursor-pointer"
          >
            {props.product}
          </NavLink>
          <span className="pl-2 text-neutral-300">{props.stars}</span>
          <span className="font-bold text-md text-neutral-900 pl-2 text-neutral-300">
            {props.price}
          </span>
          <span
            className="cursor-pointer select-none absolute bottom-2 right-4 bg-sky-600 rounded-full p-2 shadow-sm shadow-black opacity-70 pl-2 hover:bg-slate-800"
            onClick={addToCartHandler}
          >
            <BsCartPlus className="fill-white" />
          </span>
          <span className="text-neutral-700 pt-2 pl-2 text-neutral-300">
            {props.delivery}
          </span>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default MostSoldItem;
