export type PropertyRow = { [key: string]: string | number };
export type Properties = PropertyRow | PropertyRow[];

export interface ProductDetails {
    name: string;
    description: string;
    properties: Properties;
    img?: string;
}

export const mockData: { [key: string]: ProductDetails } = {
  "JTES-KD140": {
    name: "JTES-KD140",
    description: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient.",
    properties: {
      Power: "1",
      Voltage: "415-50/220-50",
      "Suction Power": "1400",
      "Max Air Flow": "120",
      "Suction Inlet": "40 MM",
      "Noise Level": "65dB",
      "Blower Type": "RGB",
      Motor: "2880",
      "Filter Type": "Star",
      Capacity: "30",
      "Cleaning Systems": "Manual",
      "Discharge System": "Rollout Container",
    },
    img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_1.png"
  },
  "JTES-KD250": {
    name: "JTES-KD250",
    description: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient.",
    properties: {
      Power: "3",
      Voltage: "415-50/220-50",
      "Suction Power": "1850",
      "Max Air Flow": "270",
      "Suction Inlet": "75 MM",
      "Noise Level": "75dB",
      "Blower Type": "RGB",
      Motor: "2880",
      "Filter Type": "Star",
      Capacity: "60",
      "Cleaning Systems": "Manual",
      "Discharge System": "Rollout Container",
    },
    img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_2.png"
  },
  "JTES-KD250-1": {
    name: "JTES-KD250(I)",
    description: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient.",
    properties: {
      Power: "3",
      Voltage: "415-50/220-50",
      "Suction Power": "1850",
      "Max Air Flow": "270",
      "Suction Inlet": "75 MM",
      "Noise Level": "75dB",
      "Blower Type": "RGB",
      Motor: "2880",
      "Filter Type": "Star",
      Capacity: "60",
      "Cleaning Systems": "Manual",
      "Discharge System": "Rollout Container",
    },
    img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_3.png"
  },
  "JTES-KD310": {
    name: "JTES-KD310",
    description: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient.",
    properties: {
      Power: "5",
      Voltage: "415-50",
      "Suction Power": "2900",
      "Max Air Flow": "400",
      "Suction Inlet": "75 MM",
      "Noise Level": "75dB",
      "Blower Type": "RGB",
      Motor: "2880",
      "Filter Type": "Star",
      Capacity: "100",
      "Cleaning Systems": "Manual",
      "Discharge System": "Rollout Container",
    },
    img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_4.png"
  },
  "JTES-KD350": {
    name: "JTES-KD350",
    description: "The JTech Heavy Duty Industrial Vacuum Cleaner is a powerful and reliable solution designed specifically for challenging industrial cleaning applications. Built with a high-performance motor, heavy-gauge body, and advanced HEPA filtration, it ensures superior suction performance, long-lasting durability, and safety across a wide range of industries. Whether it's fine dust, heavy metal chips, or wet waste, this vacuum cleaner delivers consistent results with minimal maintenance. Available in 60L and 80L tank capacities, and suitable for both wet and dry use, it is the perfect choice for factories, warehouses, foundries, construction sites, and more. JTech’s industrial vacuum system is not just a machine—it’s a dependable workhorse built to keep your operation clean, compliant, and efficient.",
    properties: {
      Power: "7.5",
      Voltage: "415-50",
      "Suction Power": "3400",
      "Max Air Flow": "459",
      "Suction Inlet": "75 MM",
      "Noise Level": "75dB",
      "Blower Type": "RGB",
      Motor: "2880",
      "Filter Type": "Star",
      Capacity: "100",
      "Cleaning Systems": "Manual",
      "Discharge System": "Rollout Container",
    },
    img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_4.png"
  },
  "JT-LC-WB": {
    name: "JTech Vacuum Leaf Collector (Walk Behind)",
    description: "JTech vacuum leaf collector is a versatile and efficient outdoor maintenance tool that simplifies the task of collecting leaves and debris. With its powerful suction, user-friendly design, and overall durability, JTech vacuum leaf collector is an excellent choice for homeowners and professionals keen on maintaining a clean and well-manicured outdoor space.",
    properties: {
        "Engine Power": "5.5 HP",
        "Start Method": "Manual start",
        "Working Width": "700mm",
        "Trash Bin Capacity": "200L",
        "Unloading Method": "Quick change of garbage bags",
        "Fuel Tank Capacity": "3.1L",
        "Fuel Consumption": "1 L/h",
        "Drive Method": "Push/self-driving walking",
        "Cleaning Area": "1500 Square meters / h",
        "Walking Speed": "1.98km/h",
        "Tire": "Rubber tires, 4000 Dia, 80 mm Width",
        "Fuel": "Petrol/Diesel"
    },
    img: "leaf-collectors/LC-2.png"
  },
  "JT-LC-VM": {
    name: "JTech Vacuum Leaf Collector (Vehicle Mounted)",
    description: "JTech Vehicle Mount Leaf Collectors are innovative and efficient tools specifically designed to make the task of leaf collection easier and more convenient for landscaping professionals, municipalities, and homeowners alike.These leaf collectors are mounted directly onto vehicles, such as trucks or utility vehicles, allowing for quick and easy leaf removal without the need for manual raking or tedious clean-up. Equipped with powerful suction systems and large debris hoppers, they efficiently collect leaves and other debris, reducing the time and effort required for the task.",
    properties: {
        "Engine Power": "5.5 HP – 8 HP",
        "Start Method": "Manual start",
        "Fuel Tank Capacity": "3.1L",
        "Fuel Consumption": "1 L/h",
        "Hose Length": "10 Mtr 150 Dia",
        "Fuel": "Petrol/Diesel"
    },
    img: "leaf-collectors/LC-1.png"
  },
  "JT-CSC": {
    name: "Jtech Coolant Sump Cleaner",
    description: "",
    properties: {},
    img: "coolant-sump-cleaner/sump_cleaner.png"
  },
  "JT-WDC": {
    name: "Jtech Wood Dust Collector",
    description: "JTech wood dust collector is a highly efficient and essential tool in any woodworking workshop. It is specifically designed to remove wood dust and debris from the air, creating a cleaner and healthier working environment. The dust collector utilizes a powerful motor and fan system to suck up the wood dust generated during cutting, sanding, and shaping wood. It effectively captures the airborne particles and traps them within its filtration system, preventing them from spreading throughout the workshop.",
    properties: [
  {
    "Power (HP)": 1,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 1100,
    "Suction Inlet (in mm)": 100,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single"
  },
  {
    "Power (HP)": 2,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 1850,
    "Suction Inlet (in mm)": 125,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single"
  },
  {
    "Power (HP)": 3,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 2200,
    "Suction Inlet (in mm)": 150,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single/Double"
  },
  {
    "Power (HP)": 5,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 3200,
    "Suction Inlet (in mm)": 200,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single/Double"
  },
  {
    "Power (HP)": 7.5,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 6000,
    "Suction Inlet (in mm)": 300,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single/Double"
  },
  {
    "Power (HP)": 10,
    "Voltage (V-Hz)": "415-50",
    "Max Air Flow (CMH)": 7500,
    "Suction Inlet (in mm)": 350,
    "Motor (RPM)": 2880,
    "Filter Type (Barrel)": "Single/Double"
  }
],
img: "cartridge-dust-collector/dust_collector.png"
  },
  "JT-PDC": {
    name: "Jtech Portable Dust Collector",
    description: "JTech portable dust collectors are high-quality and versatile solutions for industrial and commercial applications that require efficient dust and debris removal. Designed to improve air quality and reduce health and safety risks, these dust collectors offer exceptional suction power and portability, making them ideal for a wide range of industries such metalworking, construction, and more. One of the standout features of JTech portable dust collectors is their superior suction capabilities. Equipped with powerful motors, these units can effectively extract dust, chips, and other particles from the air, ensuring a cleaner and healthier working environment. The high airflow rates and strong suction force efficiently capture even the finest particles, preventing them from circulating in the air and settling on surfaces.",
    properties:
[
  {
    "motor": "0.5 HP",
    "voltage": "415 V, 50 Hz",
    "vacuum": "165 mm WG",
    "airFlow": "400 m3/hr",
    "dustCollection": "7 ltrs"
  },
  {
    "motor": "1 HP",
    "voltage": "415 V, 50 Hz",
    "vacuum": "215 mm WG",
    "airFlow": "600 m3/hr",
    "dustCollection": "7 ltrs"
  },
  {
    "motor": "3 HP",
    "voltage": "415 V, 50 Hz",
    "vacuum": "575 mm WG",
    "airFlow": "950 m3/hr",
    "dustCollection": "15 ltrs"
  },
  {
    "motor": "3 HP (Belt Drive)",
    "voltage": "415 V, 50 Hz",
    "vacuum": "500 mm WG",
    "airFlow": "1100 m3/hr",
    "dustCollection": "15 ltrs"
  }
]
,
    img: "cartridge-dust-collector/dust_collector.png"
  },
  "JT-SP-VC": {
    name: "Single Phase Vacuum Cleaner",
    description: "Jtech industrial single phase vacuum cleaner is a powerful, durable, and efficient cleaning solution designed for industrial and commercial use. With its strong suction capabilities, large capacity, and advanced filtration systems, it provides a reliable and effective cleaning solution for a range of applications.",
    img: "single-phase-vacuum-cleaner/60_Ltr_2_Motor.png",
    properties: [
  {
    "capacity": "10 Ltr",
    "power": "1000W",
    "voltage": "220V",
    "airflow": "42 L/Min",
    "function": "Dry",
    "accessories": "36MM",
    "cableLength": "7M",
    "coolingMode": "Recycle",
    "dimension": "40x40x52 Cm",
    "grossWeight": "10 Kg"
  },
  {
    "capacity": "15 Ltr",
    "power": "1000W",
    "voltage": "220V",
    "airflow": "48 L/Min",
    "function": "Wet & Dry",
    "accessories": "36MM",
    "cableLength": "7.2M",
    "coolingMode": "Recycle",
    "dimension": "43x43x61 Cm",
    "grossWeight": "12.6 Kg"
  },
  {
    "capacity": "30 Ltr",
    "power": "1200W",
    "voltage": "220V",
    "airflow": "53 L/Min",
    "function": "Wet & Dry",
    "accessories": "38MM",
    "cableLength": "7.2M",
    "coolingMode": "Recycle",
    "dimension": "43x43x80 Cm",
    "grossWeight": "14.1 Kg"
  },
  {
    "capacity": "60 Ltr",
    "power": "2000W",
    "voltage": "220V",
    "airflow": "106 L/Min",
    "function": "Wet & Dry",
    "accessories": "38MM",
    "cableLength": "7.2M",
    "coolingMode": "Recycle",
    "dimension": "63x55x97 Cm",
    "grossWeight": "24.8 Kg"
  },
  {
    "capacity": "80 Ltr",
    "power": "3000W",
    "voltage": "220V",
    "airflow": "106 L/Min",
    "function": "Wet & Dry",
    "accessories": "38MM",
    "cableLength": "7.2M",
    "coolingMode": "Recycle",
    "dimension": "63x55x102 Cm",
    "grossWeight": "27.8 Kg"
  }
]
  },
  "JT-VMCE": {
    name: "JTech Vacuum Metal Chips Extractor: Efficient Solution for Metal Chip Extraction",
    description: "Metal chip extraction is a crucial process in industries dealing with metalworking operations. Metal chips, shavings, and dust generated during machining processes can pose serious health hazards to workers and compromise the efficiency and longevity of machines. To address this issue, JTech has developed an advanced Vacuum Metal Chips Extractor that combines power, convenience, and efficiency to provide an effective solution for metal chip extraction. The JTech Vacuum Metal Chips Extractor is designed to fit a variety of metalworking machines, including lathes, milling machines, grinders, and CNC machines. It features a high-powered vacuum system capable of efficiently collecting metal chips and shavings from the working area. Equipped with a strong suction mechanism, this extractor ensures that no chips or dust particles are left behind, preventing their dispersion into the air.",
    properties: [
  {
    "model": "JTES-CE-3",
    "motorType": "Fan",
    "suctionInletDiameter_mm": 100,
    "numberOfSuctionInlets": 2,
    "tankCapacity_l": 160,
    "capacity_m2_per_h": 1000,
    "depression_mbar": 25,
    "motorPower_kW_hp": "2.2/3",
    "motorSpeed_rpm": 2800,
    "voltage": "415/50 V-Hz",
    "weight_kg": 115,
    "filter": "Star Type",
    "filterCleaning": "Manual Hand Shaker"
  },
  {
    "model": "JTES-CE-5",
    "motorType": "Fan",
    "suctionInletDiameter_mm": 100,
    "numberOfSuctionInlets": 2,
    "tankCapacity_l": 160,
    "capacity_m2_per_h": 1400,
    "depression_mbar": 25,
    "motorPower_kW_hp": "3.7/5",
    "motorSpeed_rpm": 2800,
    "voltage": "415/50 V-Hz",
    "weight_kg": 135,
    "filter": "Star Type",
    "filterCleaning": "Manual Hand Shaker"
  }
],
    img: "chips-extractor/metal-chip-extractor.png"
  }
};
