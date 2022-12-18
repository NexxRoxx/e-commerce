import "./App.css";
import Footer from "./Components/Footer";
import MainHeader from "./MainHeader/MainHeader";
import HomePage from "./Pages/HomePage";
import ProductDetail from "./Pages/ProductDetail";
import ShopPage from "./Pages/ShopPage";

function App() {
  return (
    <>
      <MainHeader />
      {/* <HomePage /> */}
      <ShopPage />
      {/* <ProductDetail /> */}
      <Footer />
    </>
  );
}

export default App;
