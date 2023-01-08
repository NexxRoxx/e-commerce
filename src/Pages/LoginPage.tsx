import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Resources/Firebase";
const LoginPage = () => {
  let navigate = useNavigate();
  const emailRef: any = useRef();
  const passwordRef: any = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function (e: any) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate("/");
    } catch (ere) {
      setError("Failed to log in");
    }
    setLoading(false);
  };
  return (
    <div className="selection:bg-rose-500 selection:text-white min-h-screen">
      <div className="min-h-screen bg-slate-800 flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="w-80 bg-white rounded-md mx-auto overflow-hidden shadow-xl">
            <div className="relative h-36 bg-indigo-500 rounded-bl-4xl bg-">
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
            <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
              <h1 className="text-2xl font-semibold text-gray-900">
                Welcome back!
              </h1>
              <form
                className="mt-4"
                action=""
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    ref={emailRef}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="example@example.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    ref={passwordRef}
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                  >
                    Password
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-10 px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                >
                  Sign in
                </button>
              </form>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Forgot your password?
              </a>
              <h5 className="pt-4 text-sm opacity-80">
                Need an account?{" "}
                <NavLink
                  to="signup"
                  className="text-indigo-900 opacity-100 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign Up
                </NavLink>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
