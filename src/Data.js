import {
	Hero_imgb1,
	Hero_imgb2,
	HeroIcon1,
	HeroIcon2,
	HeroIcon3,
	Partner,
} from "./assets/index";

export const navLinks = [
	{
		title: "Home",
		to: "/Care/",
	},
	// {
	// 	title: "Page 2",
	// 	to: "/services",
	// 	submenu: [
	// 		{
	// 			title: "page2",
	// 			to: "/services/web-design", // corrected to include the full path
	// 		},
	// 	],
	// },
	// {
	// 	title: "About Us",
	// 	to: "/services",
	// 	submenu: [
	// 		{
	// 			title: "WebDesd",
	// 			to: "/services/web-design", // corrected to include the full path
	// 		},
	// 	],
	// },
	{
		title: "About Us",
		to: "/about",
	},
	{
		title: "Contact Us",
		to: "/contact",
	},
	{
		title: "Services",
		to: "/services",
	},

	{
		title: "Career",
		to: "/career/volunteer",
		submenu: [
			{
				title: "volunteer",
				to: "/career/volunteer", // corrected to include the full path
			},
		],
	},
];

export const HeroSlider = [
	{
		id: 1,
		image: Hero_imgb1,
		icon1: HeroIcon1,
		icon2: HeroIcon2,
		icon3: HeroIcon3,
		title: "Hello",
	},
	{
		id: 2,
		image: Hero_imgb2,
		icon1: HeroIcon1,
		icon2: HeroIcon2,
		icon3: HeroIcon3,
		title: "Hello",
	}
];

export const clients = [
	{
		id: 1,
		image: Partner,
	},
	{
		id: 2,
		image: Partner,
	},
	{
		id: 3,
		image: Partner,
	},
	{
		id: 4,
		image: Partner,
	},
	{
		id: 5,
		image: Partner,
	},
];

export const TestimonialData = [
	{
		id: 1,
        name: "JOSEPH VIJAY",
		position: "Founder",
		Description:"Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered pooralteration in some form.",
	},
	{
		id: 2,
        name: "Miro2",
		position: "Hr",
		Description:"Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered pooralteration in some form.",
	},
	{
		id: 3,
        name: "Miro3",
		position: "Hr",
		Description:"Poor address a range of simply application and infrastructure this of passages of available, but the majority have suffered pooralteration in some form.",
	},
];
