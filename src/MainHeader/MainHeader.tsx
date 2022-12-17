import logo from "../assets/logo.png";
import { AiOutlineBars } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useState } from "react";

const MainHeader = () => {
  const iconsStyles = {
    size: "2rem",
  };

  const [displayMenu, setDisplayMenu] = useState("hidden");

  const menuHandler = () => {
    displayMenu === "hidden"
      ? setDisplayMenu("block")
      : setDisplayMenu("hidden");
  };
  return (
    <IconContext.Provider value={iconsStyles}>
      <nav className="flex justify-around lg:justify-between bg-slate-800 text-yellow-100 h-14 items-center shadow-2xl relative">
        <div className="lg:pl-10">
          <img src={logo} alt="company logo" className="h-20" />
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
            <li className="hover:text-blue-400 hover:cursor-pointer">Inicio</li>
            <li className="hover:text-blue-400 hover:cursor-pointer lg:hidden">
              Iniciar Sesion
            </li>
            <li className="hover:text-blue-400 hover:cursor-pointer">
              Productos
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
        <div className="hidden lg:block pr-10">utilities</div>
        <div className="lg:hidden">
          <AiOutlineBars onClick={menuHandler} className="cursor-pointer" />
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default MainHeader;
