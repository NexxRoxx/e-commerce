import FeaturesSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import HomeModal from "../Components/HomeModal";
import MostSoldSection from "../Components/MostSoldSection";
import OurProductsSection from "../Components/OurProductsSection";
import MainHeader from "../MainHeader/MainHeader";

const HomePage = () => {
  return (
    <div className="h-screen">
      <MainHeader />
      <HomeModal />
      <MostSoldSection />
      <FeaturesSection />
      <MostSoldSection />
      <OurProductsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
