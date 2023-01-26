import "./App.css";
import Footer from "./Components/Footer";
import MainHeader from "./MainHeader/MainHeader";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductDetail from "./Pages/ProductDetail";
import ResetPasswordPage from "./Components/ProfileComponents/ResetPasswordPage";
import ShopPage from "./Pages/ShopPage";
import SignUpPage from "./Components/LoginSignupComponents/SignUpPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import ProfileInformation from "./Components/LoginSignupComponents/ProfileInformation";
import MyProfile from "./Pages/MyProfile";
import MyProfileActivity from "./Components/ProfileComponents/MyProfileActivity";
import MyProfileAccount from "./Components/ProfileComponents/MyProfileAccount";
import EditProfile from "./Components/ProfileComponents/EditProfile";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Resources/Firebase";
import { loginActions } from "./store/login-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      dispatch(loginActions.setCurrentUser({ user: user }));
      // setCurrentUser(user);
    });
  }, []);
  const login = useSelector((state: any) => state.currentUser);
  console.log(login);
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
            <Route
              path="/myprofile/account/resetpassword"
              element={<ResetPasswordPage />}
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
