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
import ProfileInformation from "./Pages/ProfileInformation";
import MyProfile from "./Pages/MyProfile";
import MyProfileActivity from "./Components/MyProfileActivity";
import MyProfileAccount from "./Components/MyProfileAccount";
import EditProfile from "./Components/EditProfile";

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
        <Route path="/profileinformation" element={<ProfileInformation />} />
        <Route path="/myprofile" element={<MyProfile />}>
          <Route path="/myprofile/activity" element={<MyProfileActivity />} />
          <Route path="/myprofile/account" element={<MyProfileAccount />}>
            <Route
              path="/myprofile/account/editprofile"
              element={<EditProfile />}
            />
          </Route>
        </Route>
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
