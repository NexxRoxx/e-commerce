import CartPageItem from "../Components/CartPageItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((state: any) => state.cart);
  return (
    <div className="bg-slate-800 h-screen">
      <h1 className="text-white text-4xl pt-2 pl-4">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row p-4 gap-8">
        <div className="bg-white h-[50vh] lg:h-[80vh] lg:w-[70vw] overflow-auto rounded-lg">
          {cartItems.items.map((item: any, index: any) => {
            return (
              <CartPageItem
                id={item.id}
                quantity={item.quantity}
                img={item.img}
                productName={item.productName}
                price={item.price}
                totalPrice={item.totalPrice}
                delivery={item.delivery}
                branch={item.branch}
              />
            );
          })}
        </div>
        <div className="bg-white h-56 lg:w-[30vw] sticky top-12 rounded-lg">
          <div className="p-6 flex flex-col gap-2">
            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 w-full p-4 rounded-full">
                Go to Checkout
              </button>
            </div>
            <div className="flex justify-between">
              <span>item ({cartItems.totalQuantity})</span>
              <span>{cartItems.totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>+0</span>
            </div>
            <div className="flex justify-between mt-4 relative">
              <div className="bg-gray-400 w-full h-1 absolute -top-2"></div>
              <h1 className="text-xl font-bold">Subtotal</h1>
              <h1 className=" text-xl font-bold">
                ${cartItems.totalPrice.toFixed(2)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
