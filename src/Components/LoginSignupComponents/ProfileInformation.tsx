import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { UserAuth } from "../../contexts/AuthContext";

const ProfileInformation = () => {
  const { setUserProfileInformation }: any = UserAuth();
  let navigate = useNavigate();
  const nameRef: any = useRef();
  const addressRef: any = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async function (e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const image = await fetch(addressRef.current.value);
      console.log(image);
      if (nameRef.current.value === "" || addressRef.current.value === "") {
        throw new Error("Please fill out all fields");
      }
      await setUserProfileInformation(
        nameRef.current.value,
        addressRef.current.value
      );
      setLoading(false);
      navigate("/");
    } catch (ere) {
      if (ere.message === "Failed to fetch") {
        setError("Link image not available try again with another");
      } else {
        setError(ere.message);
      }
      setLoading(false);
    }
  };
  return (
    <div className="selection:bg-rose-500 selection:text-white min-h-screen">
      <div className="min-h-screen bg-slate-800 flex justify-center items-center">
        <div className="p-2 flex-1">
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
              <h1 className="text-3xl font-semibold text-gray-900 text-center">
                Basic Profile Information
              </h1>
              <form
                className="mt-4"
                action=""
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    ref={nameRef}
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="oscar"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                  >
                    Name
                  </label>
                </div>
                <div className="mt-6 relative">
                  <input
                    id="address"
                    type="string"
                    ref={addressRef}
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="address"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-text"
                  >
                    Profile Image
                  </label>
                </div>
                {error ? (
                  <p className="mt-4 text-sm text-red-600">{error}</p>
                ) : (
                  ""
                )}
                <button
                  type="submit"
                  className="mt-5 px-4 py-2 rounded bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
                >
                  {loading ? (
                    <div role="status" className="flex justify-center">
                      <svg
                        aria-hidden="true"
                        className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
