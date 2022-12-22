import "./App.css";
import Footer from "./Components/Footer";
import MainHeader from "./MainHeader/MainHeader";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetail from "./Pages/ProductDetail";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ShopPage from "./Pages/ShopPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <>
      <MainHeader />
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <ResetPasswordPage />
      {/* <HomePage /> */}
      {/* <ShopPage /> */}
      {/* <ProductDetail /> */}
      <Footer />
    </>
  );
}

export default App;
