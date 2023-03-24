import HomeModal from "../Components/HomePageComponents/HomeModal";
import SecondSlider from "../Components/ProductDetailComponents/SecondSlider";
import Slider from "../Components/ProductDetailComponents/Slider";
import { NavLink, useParams } from "react-router-dom";
import { items } from "../Resources/MostSoldItems";
import { UserAuth } from "../contexts/AuthContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = items.find((p) => p.productName === id.replaceAll("%", ""));
  const { setFilterState }: any = UserAuth();
  console.log(product);
  return (
    <div className="pt-4 bg-slate-900 lg:flex justify-around ">
      <div className="flex justify-center flex-col items-center mt-1 mb-4 p-4 lg:pl-8 lg:w-2/4">
        <h4 className="text-blue-600 self-start pb-2">
          <NavLink to="/">home</NavLink>/
          <NavLink to="/shop" onClick={() => setFilterState(product.type)}>
            {product.type}
          </NavLink>
          /{product.productName}
        </h4>
        <SecondSlider product={product} />
      </div>
      <div className="lg:w-2/4 lg:mt-20">
        <span className="text-white opacity-70 pl-4">{product.branch}</span>
        <h1 className="text-white text-lg pl-4 font-bold">
          {product.productName}
        </h1>
        <div className="pl-4">
          <h4 className="text-yellow-500 font-bold">$ 459.99</h4>
          <div className="flex gap-4 pr-4">
            <label htmlFor="num-select" className="text-white">
              Quantity:
            </label>
            <select
              name="nums"
              id="num-select"
              className="w-full lg:w-auto h-8 outline-none rounded-md px-4"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-4 pb-4 gap-4">
          <button className="text-white py-4 px-8 bg-blue-600 rounded-full outline-none">
            Buy It Now
          </button>
          <button className="text-blue-600 font-bold py-4 px-8 bg-white rounded-full outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
