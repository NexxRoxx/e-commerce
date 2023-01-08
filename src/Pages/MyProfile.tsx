import { NavLink, Outlet } from "react-router-dom";

const MyProfile = () => {
  return (
    <div className="bg-slate-800 p-4 h-screen">
      <h1 className="text-2xl  text-white font-bold">My Profile</h1>
      <div className="mt-2">
        <ul className="flex gap-4 text-white border-b-2 border-gray-500">
          <li className="hover:text-gray-400">
            <NavLink to="/myprofile/activity">Activity</NavLink>
          </li>
          <li>
            <NavLink
              to="/myprofile/account/editprofile"
              className="hover:text-gray-400"
            >
              Account
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default MyProfile;
