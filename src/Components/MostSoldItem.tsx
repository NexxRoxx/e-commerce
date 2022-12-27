import { BsCartPlus } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

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
      <div className="h-[60vh] lg:h-[80vh] flex flex-col relative border-2 bg-white shadow-black rounded-lg hover:shadow-md">
        <img
          src={props.img}
          alt="controller"
          className="h-2/5 lg:h-3/5 w-full p-2 lg:p-10 object-contain bg-white"
        />
        <span className=" text-neutral-900  text-sm pb-2 pl-2">
          {props.branch}
        </span>
        <a
          href="#"
          className=" text-md text-blue-700 font-medium pl-2 cursor-pointer"
        >
          {props.product}
        </a>
        <span className="pl-2">{props.stars}</span>
        <span className="font-bold text-md text-neutral-900 pl-2">
          {props.price}
        </span>
        <span className=" absolute bottom-2 right-4 bg-sky-600 rounded-full p-2 shadow-sm shadow-black opacity-70 pl-2 hover:bg-slate-800">
          <BsCartPlus
            className="fill-white cursor-pointer"
            onClick={addToCartHandler}
          />
        </span>
        <span className="text-neutral-700 pt-2 pl-2">{props.delivery}</span>
      </div>
    </IconContext.Provider>
  );
};

export default MostSoldItem;
