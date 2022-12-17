import FeaturesSection from "../Components/FeaturesSection";
import HomeModal from "../Components/HomeModal";
import MostSoldSection from "../Components/MostSoldSection";
import OurProductsSection from "../Components/OurProductsSection";

const HomePage = () => {
  return (
    <>
      {/* <div className="h-screen bg-slate-900"> */}
      <HomeModal />
      {/* </div> */}
      <MostSoldSection />
      <FeaturesSection />
      <MostSoldSection />
      <OurProductsSection />
    </>
  );
};

export default HomePage;
