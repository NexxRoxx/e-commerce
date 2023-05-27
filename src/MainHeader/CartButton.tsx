import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

const CartButton = (props: any) => {
  return (
    <div className="relative group">
      <NavLink to="/cart">
        <BsCart4 className="cursor-pointer" />
      </NavLink>
      <div className="absolute h-5 w-5 rounded-full bg-red-600 -bottom-1 -right-1 text-center cursor-pointer">
        {props.cartItems.totalQuantity}
      </div>
      <Cart />
    </div>
  );
};

export default CartButton;
