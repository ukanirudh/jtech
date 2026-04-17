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
    name: "",
    description: "",
    properties: {},
    img: ""
  },
  "JT-WDC": {
    name: "",
    description: "",
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
img: ""
  },
  "JT-PDC": {
    name: "",
    description: "",
    properties: {},
    img: ""
  }
};
