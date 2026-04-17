// import { StaticImageData } from "next/image";


interface DataType {
  id: string;
  img: string;
  name: string;
  title: string;
  category: string;
}

enum CATEGORY {
	LEAF_COLLECTOR = "Leaf Collector",
	VACCUM_CLEANER = "Vaccum Cleaner",
	SUMP_CLEANER = "Sump Cleaner",
	DUST_COLLECTOR = "Dust Collector"
}

const project_data:DataType[] = [
	{
		id: "JTES-KD140",
		img:  "heavy-duty-vacuum-cleaner/vacuum_cleaner_1.png",
		name: "JTES-KD140",
		title: "JTES-KD140",
		category: CATEGORY.VACCUM_CLEANER,
	},
  {
		id: "JTES-KD250",
		img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_2.png",
		name: "JTES-KD250",
		title: "JTES-KD250",
		category: CATEGORY.VACCUM_CLEANER,
	},
  {
		id: "JTES-KD250-1",
		img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_3.png",
		name: "JTES-KD250(I)",
		title: "JTES-KD250(I)",
		category: CATEGORY.VACCUM_CLEANER,
	},
  {
		id: "JTES-KD310",
		img:  "heavy-duty-vacuum-cleaner/vacuum_cleaner_4.png",
		name: "JTES-KD310",
		title: "JTES-KD310",
		category: CATEGORY.VACCUM_CLEANER,
	},
  {
		id: "JTES-KD350",
		img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_4.png",
		name: "JTES-KD350",
		title: "JTES-KD350",
		category: CATEGORY.VACCUM_CLEANER,
	},
  {
		id: "JT-LC-WB",
		img: "leaf-collectors/LC-2.png",
		name: "JTech Vacuum Leaf Collector (Walk Behind)",
		title: "JTech Vacuum Leaf Collector (Walk Behind)",
		category: CATEGORY.LEAF_COLLECTOR,
	},
  	{
		id: "JT-LC-VM",
		img: "leaf-collectors/LC-1.png",
		name: "JTech Vacuum Leaf Collector (Vehicle Mounted)",
		title: "JTech Vacuum Leaf Collector (Vehicle Mounted)",
		category: CATEGORY.LEAF_COLLECTOR,
	},
  	{
		id: "JT-CSC",
		img: "coolant-sump-cleaner/sump_cleaner.png",
		name: "Jtech Coolant Sump Cleaner",
		title: "Jtech Coolant Sump Cleaner",
		category: CATEGORY.SUMP_CLEANER,
	},
  	{
		id: "JT-SP-VC",
		img: "single-phase-vacuum-cleaner/60_Ltr_2_Motor.png",
		name: "Single Phase Vacuum Cleaner",
		title: "Single Phase Vacuum Cleaner",
		category: CATEGORY.VACCUM_CLEANER,
	},
  	{
		id: "JT-WDC",
		img: "cartridge-dust-collector/dust_collector.png",
		name: "Jtech Wood Dust Collector",
		title: "Jtech Wood Dust Collector",
		category: CATEGORY.DUST_COLLECTOR,
	},
  	{
		id: "JT-PDC",
		img: "cartridge-dust-collector/dust_collector.png",
		name: "Jtech Portable Dust Collector",
		title: "Jtech Portable Dust Collector",
		category: CATEGORY.DUST_COLLECTOR,
	},
];

export const ROOT_CATEGORIES: DataType[] = [
	{
		id: "JT-LCS",
		img: "leaf-collectors/LC-1.png",
		name: "Leaf Collector",
		title: "Leaf Collectors",
		category: CATEGORY.LEAF_COLLECTOR,
	},
	{
		id: "JT-VCS",
		img: "heavy-duty-vacuum-cleaner/vacuum_cleaner_2.png",
		name: "Vaccum Cleaner",
		title: "Vaccum Cleaners",
		category: CATEGORY.VACCUM_CLEANER,
	},
	{
		id: "JT-SCS",
		img: "coolant-sump-cleaner/sump_cleaner.png",
		name: "Sump Cleaner",
		title: "Sump Cleaners",
		category: CATEGORY.SUMP_CLEANER,
	},
	{
		id: "JT-DCS",
		img: "cartridge-dust-collector/dust_collector.png",
		name: "Dust Collector",
		title: "Dust Collectors",
		category: CATEGORY.DUST_COLLECTOR,
	},

]

export default project_data;
