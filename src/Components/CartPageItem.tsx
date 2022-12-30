import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartPageItem = (props: any) => {
  const dispatch = useDispatch();
  const increaseQuantity = () => {
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
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };
  return (
    <div className="flex lg:justify-between p-4 lg:p-8 border-b-2 border-gray-400">
      <div className="flex flex-col w-[50vw] lg:flex-row lg:gap-8">
        <img
          src={props.img}
          alt=""
          className="w-20 lg:w-32 h-32 object-contain aspect-[3/2]"
        />
        <div>
          <h1 className="text-black lg:w-96 underline font-semibold">
            <NavLink to="/productDetail" className="h-4">
              {props.productName}
            </NavLink>
          </h1>
          <h5 className="text-gray-500">Unit price: ${props.price}</h5>
          <span>{props.branch}</span>
        </div>
      </div>
      <div className="lg:grid flex flex-col justify-center gap-2 grid-cols-2 grid-rows-2 items-center gap-x-6">
        <div className="">
          <span>qty: {props.quantity}</span>
          <div className="flex gap-1 ">
            <div
              className="px-2 py-1 w-7 h-7 bg-slate-300 cursor-pointer hover:bg-slate-400"
              onClick={removeItemHandler}
            >
              -
            </div>
            <div
              className="px-2 py-1 w-7 h-7 bg-slate-300 cursor-pointer hover:bg-slate-400"
              onClick={increaseQuantity}
            >
              +
            </div>
          </div>
        </div>
        <div className="w-full">
          <span>US: ${props.totalPrice.toFixed(2)}</span>
        </div>
        <div className="">
          <span>{props.delivery}</span>
        </div>
        <div className="">+US 0</div>
      </div>
    </div>
  );
};

export default CartPageItem;
