import {
	Hero_imgb1,
	Hero_imgb2,
	HeroIcon1,
	HeroIcon2,
	HeroIcon3,
} from "./assets/index";

export const navLinks = [
	{
		title: "Home",
		to: "/",
	},
	{
		title: "Page 2",
		to: "/services",
		submenu: [
			{
				title: "page1",
				to: "/services/web-design", // corrected to include the full path
			},
		],
	},
	{
		title: "Page3",
		to: "/services",
		submenu: [
			{
				title: "WebDe",
				to: "/services/web-design", // corrected to include the full path
			},
		],
	},
	{
		title: "Page4",
		to: "/about",
	},
	{
		title: "Page5",
		to: "/about",
	},
];

export const HeroSlider = [
	{
		id: 1,
		image: Hero_imgb1,
		icon1: HeroIcon1,
		icon2: HeroIcon2,
		icon3: HeroIcon3,
		title:"Hello",
	},
	{
		id: 2,
		image: Hero_imgb2,
		icon1: HeroIcon1,
		icon2: HeroIcon2,
		icon3: HeroIcon3,
		title:"Hello",
	},
	{
		id: 3,
		image: Hero_imgb1,
		icon1: HeroIcon1,
		icon2: HeroIcon2,
		icon3: HeroIcon3,
		title:"Hello",
	},
];
