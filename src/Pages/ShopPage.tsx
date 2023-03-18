import { useState } from "react";
import FiltersLinks from "../Components/FiltersLinks";
import MostSoldItem from "../Components/HomePageComponents/MostSoldItem";
import { items } from "../Resources/MostSoldItems";

const ShopPage = () => {
  const [filter, setFilter] = useState("");
  const filteredItems = items.filter(
    (item, index) =>
      item.type.toLowerCase().includes(filter.toLowerCase()) ||
      item.branch.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      {/* <h1 className=" h-20 w-full font-thin text-6xl text-white text-center p-2 bg-neutral-600">
        Our Shop
      </h1> */}
      {/* <h1 className="h-20 w-full text-6xl font-thin text-center text-white bg-gray-700 py-4">
        Our Shop
      </h1> */}
      <header className="relative bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-800 opacity-50" />
        <h1 className="text-6xl font-bold text-center text-white py-4 relative z-10">
          Our Shop
        </h1>
      </header>
      <div className="flex w-full">
        <FiltersLinks setFilter={setFilter} />
        <div className=" grid grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(5,0.5fr)] w-full lg:w-4/5 lg:p-10 gap-y-8 bg-gray-200 bg-opacity-70">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => {
              return (
                <MostSoldItem
                  img={item.img}
                  branch={item.branch}
                  product={item.productName}
                  stars={item.stars}
                  price={item.price}
                  delivery={item.delivery}
                  key={index}
                />
              );
            })
          ) : (
            <div>Sorry we didn't find any items in this category. :)</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
