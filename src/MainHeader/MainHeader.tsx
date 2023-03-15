import logo from "../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { BiUserCircle, BiSearch } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { auth } from "../Resources/Firebase";
import { UserAuth } from "../contexts/AuthContext";

const MainHeader = () => {
  const iconsStyles = {
    size: "2rem",
  };
  const { logout }: any = UserAuth();
  const navigate = useNavigate();
  //*Cart and login states
  const { user }: any = UserAuth();
  const cartItems = useSelector((state: any) => state.cart);

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
        <div className="lg:pl-10 z-40">
          <NavLink to="/">
            <img src={logo} alt="company logo" className="h-20" />
          </NavLink>
        </div>
        <div
          className={`absolute bottom-0 translate-y-full lg:block lg:static lg:opacity-100 lg:translate-y-0  bg-slate-800 w-full lg:w-auto z-10
          ${
            displayMenu === "block" ? "opacity-100" : "opacity-0"
          } transition ease-in-out duration-500`}
        >
          <ul
            className={`flex flex-col lg:flex-row gap-4 p-4 ${
              displayMenu === "block" ? "block" : "hidden"
            } lg:flex`}
          >
            <li className="hover:text-blue-400 hover:cursor-pointer">
              <NavLink to="/" onClick={menuHandler}>
                Inicio
              </NavLink>
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer lg:hidden">
              <div className="flex justify-between items-center">
                <NavLink
                  to={user ? "/myprofile/activity" : "/login"}
                  onClick={menuHandler}
                >
                  {`${user ? "Go to my profile" : "Iniciar Sesion"}`}
                </NavLink>
                {user ? (
                  <div
                    onClick={signOutHandle}
                    className="px-4 bg-red-600 text-sm lg:hidden"
                  >
                    Log out
                  </div>
                ) : (
                  ""
                )}
              </div>
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              <NavLink to="/shop" onClick={menuHandler}>
                Productos
              </NavLink>
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Soporte
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Garantia
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Contacto
            </li>
          </ul>
        </div>
        <div className="flex lg:flex lg:gap-4  lg:pr-10">
          <BiSearch className="cursor-text hidden lg:block" />
          <div className="group relative">
            <NavLink
              to={user ? "/myprofile/account" : "/login"}
              className="hidden lg:block"
            >
              <BiUserCircle className="cursor-pointer" />
            </NavLink>
            {user ? (
              <div className="hidden absolute group-hover:flex flex-col justify-center items-center gap-2 -left-28 w-52 bg-slate-800 p-2 pt-4 cursor-auto">
                <img
                  src={auth.currentUser.photoURL}
                  alt=""
                  className="rounded-full w-20 h-20 aspect-[3/2] object-cover"
                />
                <h1>Hello, {auth.currentUser.displayName}</h1>
                <NavLink
                  to="/myprofile/activity"
                  className="bg-red-500 px-2 text-center rounded-lg py-2 w-full hover:bg-red-600"
                >
                  <button className="text-center">Go to profile {"->"}</button>
                </NavLink>
                <NavLink
                  to="/"
                  className="bg-blue-500 px-2 text-center rounded-lg py-2 w-full hover:bg-blue-600"
                >
                  <button className="text-center" onClick={signOutHandle}>
                    Sign out
                  </button>
                </NavLink>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="relative group">
            <NavLink to="/cart">
              <BsCart4 className="cursor-pointer" />
            </NavLink>
            <div className="absolute h-5 w-5 rounded-full bg-red-600 -bottom-1 -right-1 text-center cursor-pointer">
              {cartItems.totalQuantity}
            </div>
            <Cart />
          </div>
        </div>
        <div className="lg:hidden">
          <AiOutlineBars onClick={menuHandler} className="cursor-pointer" />
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default MainHeader;
