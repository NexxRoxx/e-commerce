import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
  SlSocialReddit,
} from "react-icons/sl";
const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 grid grid-cols-2 grid-rows-2 pt-10 gap-y-4 lg:gap-y-0 lg:grid-cols-4 lg:grid-rows-1 border-t-2 border-gray-700">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-yellow-200 text-center">CONTAC US</h1>
          <p className=" text-yellow-50 pt-2 text-center">
            CAT – Centro Comercial de Alta Tecnología Cra. 15 # Calle 77
            Esquina, Bogotá
          </p>
          <p className=" text-yellow-50 text-center">
            Locales: 1-22, 1-66 y 2-31
          </p>
          <p className=" text-yellow-50">Cel: 3158882572</p>
          <p className=" text-yellow-50">Tel: 3458199</p>
        </div>
        <div className="">
          <h1 className="text-yellow-200 text-center pb-2">SECTIONS</h1>
          <ul className="flex flex-col items-center text-sm gap-4 lg:gap-2">
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Log In
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Warranty
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-yellow-200 text-center pb-4 lg:pb-2">SHOP</h1>
          <ul className="flex flex-col items-center text-sm gap-4 lg:gap-2">
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Graphic Cards
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                CPUs
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                MotherBoards
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                RAMs
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Hard Drives
              </a>
            </li>
            <li>
              <a href="#" className="text-yellow-50 hover:text-yellow-400">
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 justify-self-center justify-items-center pr-4 w-36">
          <h1 className="text-yellow-200 col-span-2">FOLLOW US</h1>
          <a href="">
            <SlSocialFacebook className="fill-yellow-400 hover:brightness-200" />
          </a>
          <a href="">
            <SlSocialTwitter className="fill-yellow-400 hover:brightness-200" />
          </a>
          <a href="">
            <SlSocialInstagram className="fill-yellow-400 hover:brightness-200" />
          </a>
          <a href="">
            <SlSocialLinkedin className="fill-yellow-400 hover:brightness-200" />
          </a>
          <a href="">
            <SlSocialYoutube className="fill-yellow-400 hover:brightness-200" />
          </a>
          <a href="">
            <SlSocialReddit className="fill-yellow-400 hover:brightness-200" />
          </a>
        </div>
      </div>
      <div className="w-full bg-slate-900 text-white text-sm text-center">
        © 2022 Oscar Castro | All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
