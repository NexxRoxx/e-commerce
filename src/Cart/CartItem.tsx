import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props: any) => {
  const dispatch = useDispatch();
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.id));
  };
  return (
    <div className="flex gap-2 relative mb-2">
      <span className="text-black absolute right-2 bottom-7">
        qty: {props.quantity}
      </span>
      <FiTrash2
        className="absolute right-2 bottom-1 cursor-pointer select-none"
        size={20}
        color={"black"}
        onClick={removeItemHandler}
      />
      <div className="h-20 w-1/4">
        <img
          src={props.img}
          alt={props.productName}
          className="h-20 w-full border-2 border-gray-400 p-1 cursor-pointer object-contain"
        />
      </div>
      <div className="w-3/4">
        <h1 className="text-blue-800 text-sm">
          {`${props.productName.substring(0, 40)} . . . .`}
        </h1>
        <h4 className="text-black text-sm font-bold">{`$${props.price}`}</h4>
        <span className="text-gray-800 text-sm">{props.delivery}</span>
      </div>
    </div>
  );
};

export default CartItem;
