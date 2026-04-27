

import service_img_1 from "@/assets/images/chips-extractor/metal-chip-extractor.png";
import service_img_2 from "@/assets/images/leaf-collectors/LC-1.png";
import service_img_3 from "@/assets/images/heavy-duty-vacuum-cleaner/vacuum_cleaner_4.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: string | number;
  path: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}



const service_data: DataType[] = [
  // home 01
  {
    id: "JT-VMCE",
    path: "home_1",
    img: service_img_1,
    icon: service_icon_1,
    title: "Metal Chips Extractor",
    sm_des: "JTech Vacuum Metal Chips Extractor: Efficient Solution for Metal Chip Extraction",
  },
  {
    id: "JT-LC-WB",
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Vaccum Leaf Collector",
    sm_des: "JTech vacuum leaf collector is a versatile and efficient outdoor maintenance tool that simplifies the task of collecting leaves and debris. With its powerful suction, user-friendly design, and overall durability, JTech vacuum leaf collector is an excellent choice for homeowners and professionals keen on maintaining a clean and well-manicured outdoor space",
  },
  {
    id: "JT-TP-VC",
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Industrial Vacuum Cleaner",
    sm_des: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications",
  },

  // service
  {
    id: 1,
    path: "service",
    img: service_img_2,
    icon: service_icon_2,
    title: "Roof Solar Panels",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 2,
    path: "service",
    img: service_img_3,
    icon: service_icon_3,
    title: "Commercial Roofing",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 3,
    path: "service",
    img: service_img_1,
    icon: service_icon_1,
    title: "Solar Panels Services",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },


]
export default service_data