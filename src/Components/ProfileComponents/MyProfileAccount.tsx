import { NavLink, Outlet } from "react-router-dom";

const MyProfileAccount = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full bg-slate-500 mt-2 rounded-3xl">
      <div className="lg:pl-4 pt-2 w-full lg:w-1/5 lg:h-96 lg:border-r-2 border-b-2 border-gray-400">
        <ul className="flex justify-center gap-2 lg:flex-col lg:gap-4 pt-2 text-black font-bold">
          <li className="hover:text-slate-800 border-b-2 border-yellow-100 text-xs w-20 lg:text-base lg:w-full lg:border-0">
            <NavLink to="/myprofile/account/editprofile">
              Edit profile information
            </NavLink>
          </li>
          <li className="hover:text-slate-800 border-b-2 border-yellow-100 text-xs w-20 lg:text-base lg:w-full lg:border-0">
            <NavLink to="/myprofile/account/resetpassword">
              Reset Password
            </NavLink>
          </li>
          <li className="hover:text-slate-800 border-b-2 border-yellow-100 text-xs w-20 lg:text-base lg:w-full lg:border-0">
            <NavLink to="/watchlist">Change Email</NavLink>
          </li>
        </ul>
      </div>
      <div className="p-4 relative">
        <Outlet />
      </div>
    </div>
  );
};

export default MyProfileAccount;
