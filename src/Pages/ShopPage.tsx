import FiltersLinks from "../Components/FiltersLinks";
import MostSoldItem from "../Components/HomePageComponents/MostSoldItem";
import { items } from "../Resources/MostSoldItems";

const ShopPage = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1 className=" h-20 w-full font-thin text-6xl text-white text-center p-2 bg-neutral-600">
        Our Shop
      </h1>
      <div className="flex w-full">
        <FiltersLinks />
        {/* <div className=" grid grid-cols-4 grid-rows-5 w-4/5 p-10 gap-y-8 bg-gray-200 bg-opacity-70"> */}
        <div className=" grid grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(5,0.5fr)] w-full lg:w-4/5 lg:p-10 gap-y-8 bg-gray-200 bg-opacity-70">
          {items.map((item, index) => {
            return (
              <MostSoldItem
                img={items[index].img}
                branch={items[index].branch}
                product={items[index].productName}
                stars={items[index].stars}
                price={items[index].price}
                delivery={items[index].delivery}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
