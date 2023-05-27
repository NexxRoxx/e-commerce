import FiltersLinks from "../Components/FiltersLinks";
import MostSoldItem from "../Components/HomePageComponents/MostSoldItem";
import { items } from "../Resources/MostSoldItems";
import { UserAuth } from "../contexts/AuthContext";

const ShopPage = () => {
  const { filter, setFilterState }: any = UserAuth();
  const filteredItems = items.filter(
    (item, index) =>
      item.type.toLowerCase().includes(filter.toLowerCase()) ||
      item.branch.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="relative">
      <header className="relative bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-800 opacity-50" />
        <h1 className="text-6xl font-bold text-center text-white py-4 relative z-10">
          Our Shop
        </h1>
      </header>
      <div className="flex w-full bg-gray-200">
        <FiltersLinks />
        <div className=" grid grid-cols-1 justify-items-start lg:grid-cols-4 grid-rows-[repeat(5,0.5fr)] w-full lg:w-4/5 lg:p-10 gap-y-8 bg-gray-200 bg-opacity-70 relative">
          {/* <p className="absolute top-0 left-0 p-1">
            Filters:{" "}
            <button className="bg-slate-400 text-sm p-1 rounded">
              {filter}
            </button>
          </p> */}
          {filter ? (
            <p className="absolute top-0 left-0 inline-flex align-middle justify-center items-center py-1 px-2 ">
              Current Filter:
              <button
                className="py-1 px-2 border-[1px solid #CCC] rounded-full border-2 bg-white opacity-70 hover:opacity-100 text-base font-bold text-[#333]"
                onClick={() => setFilterState("")}
              >
                {filter} x
              </button>
            </p>
          ) : (
            ""
          )}
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
