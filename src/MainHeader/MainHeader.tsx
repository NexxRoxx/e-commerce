import logo from "../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../Resources/Firebase";
import { UserAuth } from "../contexts/AuthContext";
import SectionsLinks from "./SectionsLinks";
import LoginButton from "./LoginButton";
import CartButton from "./CartButton";

const MainHeader = () => {
  const iconsStyles = {
    size: "2rem",
  };
  const { logout }: any = UserAuth();
  const navigate = useNavigate();
  //*Cart and login context states
  const { user }: any = UserAuth();
  const cartItems = useSelector((state: any) => state.cart);

  //* Display options links for large screens and hide it for smaller screens
  const [displayMenu, setDisplayMenu] = useState("hidden");
  const [error, setError] = useState("");

  const menuHandler = () => {
    displayMenu === "hidden"
      ? setDisplayMenu("block")
      : setDisplayMenu("hidden");
  };

  const signOutHandle = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      await logout();
      navigate("/");
    } catch (error) {
      alert("Something went wrong try again!");
    }
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      <nav className="flex justify-around lg:justify-between bg-slate-800 text-yellow-100 h-14 items-center shadow-2xl relative">
        {/* Logo */}
        <div className="lg:pl-10 z-40">
          <NavLink to="/">
            <img src={logo} alt="company logo" className="h-20" />
          </NavLink>
        </div>
        {/* Options links */}
        <SectionsLinks
          displayMenu={displayMenu}
          menuHandler={menuHandler}
          user={user}
          signOutHandle={signOutHandle}
        />
        {/* Search login and cart */}
        <div className="flex lg:flex lg:gap-4  lg:pr-10">
          {/* Search Button*/}
          <BiSearch className="cursor-text hidden lg:block" />
          {/* Login Button*/}
          <LoginButton user={user} auth={auth} signOutHandle={signOutHandle} />
          {/* Cart Button*/}
          <CartButton cartItems={cartItems} />
        </div>
        <div className="lg:hidden">
          <AiOutlineBars onClick={menuHandler} className="cursor-pointer" />
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default MainHeader;
