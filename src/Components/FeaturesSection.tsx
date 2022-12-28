import amdLogo from "../assets/amd.png";
import intelLogo from "../assets/intelLogo.png";
import nvidiaLogo from "../assets/nvidiaLogo.png";
import samsungLogo from "../assets/samsungLogo.svg";
import toshibaLogo from "../assets/toshibaLogo.png";
import razerLogo from "../assets/razerLogo.png";
import evgaLogo from "../assets/evgaLogo.png";
import asusLogo from "../assets/asusLogo.png";
import corsairLogo from "../assets/corsairLogo.png";

const FeaturesSection = () => {
  return (
    <div>
      <h1 className="bg-slate-800 text-2xl pl-2 pt-3 pb-4 text-white font-medium">
        OUR ASSOCIATES
      </h1>
      <div className="flex flex-col justify-around p-4 bg-gradient-to-t from-slate-800 via-slate-600 to-slate-800 h-96  brightness-100 lg:p-10">
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-100 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={amdLogo}
            alt="AMD Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={intelLogo}
            alt="Intel Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={nvidiaLogo}
            alt="Nvidia Logo"
          />
        </div>
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-100 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={samsungLogo}
            alt="Samsung Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={toshibaLogo}
            alt="Toshiba Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={razerLogo}
            alt="Razer Logo"
          />
        </div>
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-100 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={evgaLogo}
            alt="Evga Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={asusLogo}
            alt="Asus Logo"
          />
          <img
            className=" aspect-[3/2] object-contain mix-blend-color-burn"
            src={corsairLogo}
            alt="Corsair Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
