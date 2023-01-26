import { auth } from "../../Resources/Firebase";
import { useState } from "react";
import { useRef } from "react";
import { updateProfile } from "firebase/auth";
const EditProfile = () => {
  const nameRef: any = useRef();
  const imgRef: any = useRef();
  const currentUser = auth.currentUser;
  const [displayForm, setDisplayForm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const formShowHandler = () => {
    setDisplayForm((prev) => !prev);
  };

  const handleSubmit = async function (e: any) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await updateProfile(auth.currentUser, {
        displayName: nameRef.current.value,
        photoURL: imgRef.current.value,
      });
      setDisplayForm((prev) => !prev);
    } catch (ere) {
      setError("Failed to log in");
    }
    setLoading(false);
  };
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row gap-2 items-center">
        <h1 className="text-base lg:text-xl text-black font-bold">Name:</h1>
        <span className="text-base lg:text-lg text-red-300">
          {currentUser ? currentUser.displayName : ""}
        </span>
      </div>
      <div className="flex flex-col items-center lg:items-start gap-2 mt-8">
        <h1 className="lg:text-xl text-black font-bold">Profile Image: </h1>
        <img
          src={currentUser ? currentUser.photoURL : ""}
          alt="Profile Image"
          className="w-14 h-14 lg:w-28 lg:h-28 rounded-full aspect-[3/2] object-cover"
        />
      </div>
      <button
        className="text-sm text-blue-900 font-bold border-b-2 border-blue-900 mt-4 hover:text-blue-800 hover:border-blue-800"
        onClick={formShowHandler}
      >
        Change Profile Information {"->"}
      </button>
      {displayForm ? (
        <div className="lg:absolute top-10 lg:right-0 lg:translate-x-full lg:shadow-md shadow-slate-700 rounded-3xl lg:p-5 lg:w-96">
          <h1 className="text-sm lg:text-base">
            Please complete the following form:{" "}
          </h1>
          <form action="" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              defaultValue={currentUser.displayName}
              className="peer h-9 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded-lg text-sm"
            />
            <label htmlFor="img">Image URL:</label>
            <input
              type="text"
              id="img"
              ref={imgRef}
              defaultValue={currentUser.photoURL}
              className="peer h-9 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 rounded-lg text-sm"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 rounded bg-indigo-800 hover:bg-indigo-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-80 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditProfile;
