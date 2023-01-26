import FeaturesSection from "../Components/HomePageComponents/FeaturesSection";
import HomeModal from "../Components/HomePageComponents/HomeModal";
import MostSoldSection from "../Components/HomePageComponents/MostSoldSection";
import OurProductsSection from "../Components/HomePageComponents/OurProductsSection";

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
