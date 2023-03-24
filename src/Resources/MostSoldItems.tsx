import rtx3090 from "../assets/mostSoldImg/1/rtx3090/one.png";
import ryzen9 from "../assets/mostSoldImg/1/Ryzen9/one.jpg";
import asusBoard from "../assets/mostSoldImg/1/asusROG/one.jpg";
import kingRam from "../assets/mostSoldImg/1/ram/one.jpg";
import samsungSSD from "../assets/mostSoldImg/1/ssd/one.jpg";
import razerHeadphones from "../assets/mostSoldImg/1/headphones/one.jpg";
import rtx4090 from "../assets/mostSoldImg/2/video/one.jpg";
import intelCPU from "../assets/mostSoldImg/2/cpu/one.jpg";
import tomahawk from "../assets/mostSoldImg/2/board/one.jpg";
import wdSSD from "../assets/mostSoldImg/2/ssd/one.jpg";
const asusRogFolder = import.meta.glob("../assets/mostSoldImg/1/asusROG/*");
const rtx3090Folder = import.meta.glob("../assets/mostSoldImg/1/rtx3090/*");
const ryzen9Folder = import.meta.glob("../assets/mostSoldImg/1/Ryzen9/*");
const furyRamFolder = import.meta.glob("../assets/mostSoldImg/1/ram/*");
const samsungSSDFolder = import.meta.glob("../assets/mostSoldImg/1/ssd/*");
const ryzerHeadphonesDFolder = import.meta.glob(
  "../assets/mostSoldImg/1/headphones/*"
);
const rtx4090Folder = import.meta.glob("../assets/mostSoldImg/2/video/*");
const intelCPUFolder = import.meta.glob("../assets/mostSoldImg/2/cpu/*");
const msiBoardFolder = import.meta.glob("../assets/mostSoldImg/2/board/*");
const wdSSDFolder = import.meta.glob("../assets/mostSoldImg/2/ssd/*");
const arrayOfFoldersImages = [
  rtx3090Folder,
  ryzen9Folder,
  asusRogFolder,
  furyRamFolder,
  samsungSSDFolder,
  ryzerHeadphonesDFolder,
  rtx4090Folder,
  intelCPUFolder,
  msiBoardFolder,
  wdSSDFolder,
];

export const items = [
  {
    id: 1,
    img: rtx3090,
    branch: "EVGA",
    productName: "Nvidia GeForce RTX 3090 XC3 BLACK GAMING",
    stars: "5 Stars",
    price: 1499.99,
    delivery: "Free delivery",
    type: "Graphic Cards",
    imagesFolder: arrayOfFoldersImages[0],
  },
  {
    id: 2,
    img: ryzen9,
    branch: "AMD RYZEN",
    productName: "AMD Ryzen 9 5900X 12-core, 24-Thread Unlocked",
    stars: "5 Stars",
    price: 569.99,
    delivery: "Free delivery",
    type: "CPUs",
    imagesFolder: arrayOfFoldersImages[1],
  },
  {
    id: 3,
    img: asusBoard,
    branch: "ASUS",
    productName: "Asus ROG Maximus XIII Extreme (WiFi 6E) Z590 LGA 1200",
    stars: "5 Stars",
    price: 799.99,
    delivery: "Free delivery",
    type: "MotherBoard",
    imagesFolder: arrayOfFoldersImages[2],
  },
  {
    id: 4,
    img: kingRam,
    branch: "KINGSTON",
    productName: "Kingston FURY Beast RGB 16GB 3200MHz DDR4 CL16 Desktop",
    stars: "5 Stars",
    price: 70.99,
    delivery: "Free delivery",
    type: "Ram",
    imagesFolder: arrayOfFoldersImages[3],
  },
  {
    id: 5,
    img: samsungSSD,
    branch: "SAMSUNG",
    productName:
      "Samsung 970 EVO Plus SSD 2TB NVMe M.2 Internal Solid State Hard Drive",
    stars: "5 Stars",
    price: 499.99,
    delivery: "Free delivery",
    type: "Storage",
    imagesFolder: arrayOfFoldersImages[4],
  },
  {
    id: 6,
    img: razerHeadphones,
    branch: "RAZER",
    productName: "Razer BlackShark V2 Pro Wireless Gaming Headset: THX 7.1",
    stars: "5 Stars",
    price: 179.99,
    delivery: "Free delivery",
    type: "Headphones",
    imagesFolder: arrayOfFoldersImages[5],
  },
  {
    id: 7,
    img: rtx4090,
    branch: "MSI",
    productName: "MSI Gaming GeForce RTX 4090 24GB GDRR6X 384-Bit HDMI",
    stars: "5 Stars",
    price: 3499.99,
    delivery: "Free delivery",
    type: "Graphic Cards",
    imagesFolder: arrayOfFoldersImages[6],
  },
  {
    id: 8,
    img: intelCPU,
    branch: "INTEL",
    productName:
      "Intel Core i7-13700K Desktop Processor 16 cores (8 P-cores + 8 E-cores)",
    stars: "5 Stars",
    price: 429.99,
    delivery: "Free delivery",
    type: "CPUs",
    imagesFolder: arrayOfFoldersImages[7],
  },
  {
    id: 9,
    img: tomahawk,
    branch: "MSI",
    productName:
      "MSI MAG B550 TOMAHAWK Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0.",
    stars: "5 Stars",
    price: 189.99,
    delivery: "Free delivery",
    type: "MotherBoard",
    imagesFolder: arrayOfFoldersImages[8],
  },
  {
    id: 10,
    img: wdSSD,
    branch: "WD_BLACK",
    productName:
      "WD_BLACK 1TB SN850X NVMe Internal Gaming SSD Solid State Drive",
    stars: "5 Stars",
    price: 159.99,
    delivery: "Free delivery",
    type: "Storage",
    imagesFolder: arrayOfFoldersImages[9],
  },
];
