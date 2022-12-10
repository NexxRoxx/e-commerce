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
      <div className="flex flex-col justify-around p-4 bg-gradient-to-t from-slate-800 via-slate-600 to-slate-800 h-96  brightness-75">
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-80 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img src={amdLogo} alt="AMD Logo" />
          <img src={intelLogo} alt="Intel Logo" />
          <img src={nvidiaLogo} alt="Nvidia Logo" />
        </div>
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-80 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img src={samsungLogo} alt="Samsung Logo" />
          <img src={toshibaLogo} alt="Toshiba Logo" />
          <img src={razerLogo} alt="Razer Logo" />
        </div>
        <div className="[&>img]:h-8 lg:[&>img]:h-16 [&>img]:w-28 lg:[&>img]:w-1/4 [&>img]:opacity-80 [&>img]:contrast-200 flex gap-x-2 justify-around">
          <img src={evgaLogo} alt="Evga Logo" />
          <img src={asusLogo} alt="Asus Logo" />
          <img src={corsairLogo} alt="Corsair Logo" />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
