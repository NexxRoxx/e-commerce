import { NavLink, Outlet } from "react-router-dom";

const MyProfileAccount = () => {
  return (
    <div className="flex w-full bg-slate-500 mt-2 rounded-3xl">
      <div className="lista pl-4 pt-2 w-1/5 h-96 border-r-2 border-gray-400">
        <ul className="flex flex-col gap-4 pt-2 text-black font-bold">
          <li className="hover:text-slate-800">
            <NavLink to="/myprofile/account/editprofile">
              Edit profile information
            </NavLink>
          </li>
          <li className="hover:text-slate-800">
            <NavLink to="/recentlyviewed">Reset Password</NavLink>
          </li>
          <li className="hover:text-slate-800">
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
