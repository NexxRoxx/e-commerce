import OurProductsItems from "./OurProductsItems";
import gCard from "../../assets/gtx.jpg";
import cpu from "../../assets/intel.jpg";
import board from "../../assets/board.jpg";
import ram from "../../assets/ram.jpg";
import hDrive from "../../assets/drive.jpg";
import accessories from "../../assets/mouse.jpg";

const OurProductsSection = () => {
  const items = [
    {
      img: gCard,
      title: "Graphic card",
      description: "FINE-TUNED TO PERFECTION",
    },
    {
      img: cpu,
      title: "CPU",
      description:
        " The world’s most advanced PC processors for gamers and creators extends performance to power your PC.",
    },
    {
      img: board,
      title: "Motherboard",
      description:
        "Designed and tested to find the perfect balance of raw power and iron-clad stability",
    },
    {
      img: ram,
      title: "RAM",
      description:
        "Delivers higher frequencies and greater capacities of DDR5 technology in a high-quality.",
    },
    {
      img: hDrive,
      title: "Storage",
      description: "INCREDIBLE SPEED ROCK SOLID RELIABILITY",
    },
    {
      img: accessories,
      title: "Accessories",
      description: "LOW-PROFILE ERGONOMICS. HIGH-PERFORMANCE WIRELESS.",
    },
  ];
  return (
    <>
      <h1 className="bg-slate-800 text-2xl pl-2 pt-3 pb-4 text-white font-medium">
        OUR PRODUCTS
      </h1>
      <div className="lg:grid grid-cols-2 grid-rows-3 auto-rows-fr gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full overflow-hidden pb-2">
        {items.map((item, index) => {
          return (
            <OurProductsItems
              image={item.img}
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default OurProductsSection;
