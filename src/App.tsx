import "./App.css";
import Footer from "./Components/Footer";
import MainHeader from "./MainHeader/MainHeader";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetail from "./Pages/ProductDetail";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ShopPage from "./Pages/ShopPage";
import SignUpPage from "./Pages/SignUpPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <header className="sticky top-0 z-50">
        <MainHeader />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

{
  /* <LoginPage /> */
}
{
  /* <SignUpPage /> */
}
{
  /* <ResetPasswordPage /> */
}
{
  /* <ErrorPage /> */
}
{
  /* <HomePage /> */
}
{
  /* <ShopPage /> */
}
{
  /* <ProductDetail /> */
}
