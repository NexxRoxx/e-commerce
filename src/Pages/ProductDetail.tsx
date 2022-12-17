import HomeModal from "../Components/HomeModal";
import Slider from "../Components/Slider";

const ProductDetail = () => {
  return (
    <div className="pt-4 bg-slate-900 lg:flex">
      <div className=" flex justify-center flex-col items-center mt-4 mb-4">
        <span className="text-white self-start">root/root/root/root</span>
        <Slider />
      </div>
      <div>
        <span className="text-white opacity-70 pl-4">Brand</span>
        <h1 className="text-white text-lg pl-4 font-bold">
          Samsung 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Hard Drive
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
              className="w-full h-8 outline-none rounded-md px-4"
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
