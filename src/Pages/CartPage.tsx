import CartPageItem from "../Components/CartPageItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart);
  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex p-10 gap-8">
        <div className="bg-white h-96 w-[70vw]">
          <CartPageItem />
        </div>
        <div className="bg-red-400 h-96 w-[30vw]"></div>
      </div>
    </div>
  );
};

export default CartPage;
