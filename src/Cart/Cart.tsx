import { useSelector } from "react-redux";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart);
  return (
    <div className="bg-white w-80 absolute top-8 hidden -right-4 z-30 group-hover:flex p-4 flex-col">
      <h1 className="text-black text-lg font-bold mb-2">Shopping Cart</h1>
      {cartItems.items.length > 0 ? (
        cartItems.items.map((item: any, index: any) => {
          return (
            <div className="flex gap-2 relative mb-2">
              <span className="text-black absolute right-2 bottom-7">
                qty: {item.quantity}
              </span>
              <FiTrash2
                className="absolute right-2 bottom-1 cursor-pointer"
                size={20}
                color={"black"}
              />
              <div>
                <img
                  src={item.img}
                  alt={item.productName}
                  className="h-20 w-28 border-2 border-gray-400 p-1 cursor-pointer"
                />
              </div>
              <div>
                <h1 className="text-blue-800 text-sm">{item.productName}</h1>
                <h4 className="text-black text-sm font-bold">{`$${item.price}`}</h4>
                <span className="text-gray-800 text-sm">{item.delivery}</span>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <h1 className="text-gray-600 mt-2 mb-2">Your cart is empty</h1>
          <h4 className="text-gray-600 mb-8">Time to start shopping!</h4>
        </div>
      )}
      {cartItems.items.length > 0 ? (
        <div className="text-black bg-slate-300 text-center font-bold p-2">
          Total: ${cartItems.totalPrice}
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
