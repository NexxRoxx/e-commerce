import { NavLink } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

const LoginButton = (props: any) => {
  return (
    <div className="group relative">
      <NavLink
        to={props.user ? "/myprofile/account" : "/login"}
        className="hidden lg:block"
      >
        {props.user ? (
          <img
            src={props.auth.currentUser.photoURL}
            alt=""
            className="rounded-full w-8 h-8"
          />
        ) : (
          <BiUserCircle className="cursor-pointer" />
        )}
      </NavLink>
      {props.user ? (
        <div className="hidden absolute group-hover:flex flex-col justify-center items-center gap-2 -left-28 w-52 bg-slate-800 p-2 pt-4 cursor-auto">
          <img
            src={props.auth.currentUser.photoURL}
            alt=""
            className="rounded-full w-20 h-20 aspect-[3/2] object-cover"
          />
          <h1>Hello, {props.auth.currentUser.displayName}</h1>
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
            <button className="text-center" onClick={props.signOutHandle}>
              Sign out
            </button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoginButton;
