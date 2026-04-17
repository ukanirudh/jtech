

import service_img_1 from "@/assets/images/heavy-duty-vacuum-cleaner/vacuum_cleaner_1.png";
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
    id: "JTES-KD140",
    path: "home_1",
    img: service_img_1,
    icon: service_icon_1,
    title: "JTES-KD140",
    sm_des: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient",
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
    id: "JTES-KD350",
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "JTES-KD350",
    sm_des: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient",
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