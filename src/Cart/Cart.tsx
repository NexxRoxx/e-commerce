import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cartData = JSON.parse(window.localStorage.getItem("cart") || "{}");
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity || 0,
        totalPrice: cartData.totalPrice || 0,
      })
    );
  }, []);
  const cartItems = useSelector((state: any) => state.cart);
  return (
    <div className="bg-white w-80 max-h-[90vh] absolute top-8 hidden -right-4 z-30 group-hover:flex p-4 flex-col">
      <h1 className="text-black text-lg font-bold mb-2">Shopping Cart</h1>
      <div className="overflow-y-auto mb-4">
        {cartItems.items.length > 0 ? (
          cartItems.items.map((item: any, index: any) => {
            return (
              <CartItem
                id={item.id}
                quantity={item.quantity}
                img={item.img}
                productName={item.productName}
                price={item.price}
                delivery={item.delivery}
              />
            );
          })
        ) : (
          <div>
            <h1 className="text-gray-600 mt-2 mb-2">Your cart is empty</h1>
            <h4 className="text-gray-600 mb-8">Time to start shopping!</h4>
          </div>
        )}
      </div>
      {cartItems.items.length > 0 ? (
        <div className="text-black bg-slate-300 text-center font-bold p-2">
          Total: ${cartItems.totalPrice.toFixed(2)}
        </div>
      ) : (
        ""
      )}
      <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 text-sm mt-1 text-black rounded-md">
        Checkout
      </button>
      <button className="w-full bg-red-500 hover:bg-red-600 py-2 text-sm mt-1 text-black rounded-md">
        View cart
      </button>
    </div>
  );
};

export default Cart;
