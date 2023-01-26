import { useRef, useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Resources/Firebase";
const ResetPasswordPage = () => {
  const passwordRef: any = useRef();
  const newPasswordRef: any = useRef();
  const confirmNewPasswordRef: any = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async function (e: any) {
    e.preventDefault();
    if (newPasswordRef.current.value !== confirmNewPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await updatePassword(auth.currentUser, newPasswordRef.current.value);
      alert("Success");
    } catch (ere) {
      setError("Failed to log in");
      console.log(ere);
    }
    setLoading(false);
  };
  return (
    <div className="p-1 flex-1">
      <div className="lg:w-80 bg-white rounded-md mx-auto overflow-hidden shadow-xl">
        <div className="relative h-20 bg-indigo-500 rounded-bl-4xl">
          <svg
            className="absolute bottom-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="px-10 pb-8 bg-white rounded-tr-4xl">
          <h1 className="text-3xl font-semibold text-gray-900 text-center">
            Reset Password
          </h1>
          <form
            className="mt-4"
            action=""
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-4">
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder=""
              />
              <label
                htmlFor="currentPassword"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
              >
                Current Password
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="password"
                name="password"
                type="password"
                ref={newPasswordRef}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder=""
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
              >
                New Password
              </label>
            </div>
            <div className="relative mb-4">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="text"
                ref={confirmNewPasswordRef}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                placeholder=""
              />
              <label
                htmlFor="confirmPassword"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
              >
                Confirm New Password
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
