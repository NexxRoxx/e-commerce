import { NavLink } from "react-router-dom";

const SectionsLinks = (props: any) => {
  return (
    <div
      className={`absolute bottom-0 translate-y-full lg:block lg:static lg:opacity-100 lg:translate-y-0  bg-slate-800 w-full lg:w-auto z-10
          ${
            props.displayMenu === "block" ? "opacity-100" : "opacity-0"
          } transition ease-in-out duration-500`}
    >
      <ul
        className={`flex flex-col lg:flex-row gap-4 p-4 ${
          props.displayMenu === "block" ? "block" : "hidden"
        } lg:flex`}
      >
        <li className="hover:text-blue-400 hover:cursor-pointer">
          <NavLink to="/" onClick={props.menuHandler}>
            Inicio
          </NavLink>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer lg:hidden">
          <div className="flex justify-between items-center">
            <NavLink
              to={props.user ? "/myprofile/activity" : "/login"}
              onClick={props.menuHandler}
            >
              {`${props.user ? "Go to my profile" : "Iniciar Sesion"}`}
            </NavLink>
            {props.user ? (
              <div
                onClick={props.signOutHandle}
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
          <NavLink to="/shop" onClick={props.menuHandler}>
            Productos
          </NavLink>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer">
          <NavLink to="/support">Soporte</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer">
          <NavLink to="/warranty">Garantia</NavLink>
        </li>
        <li className="hover:text-blue-400 hover:cursor-pointer">Contacto</li>
      </ul>
    </div>
  );
};

export default SectionsLinks;
