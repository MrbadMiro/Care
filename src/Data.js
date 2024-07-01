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
		title: "Join Us",
		to: "Careerr",
		// to: "/career/volunteer",
		submenu: [
			{
				title: "Volunteer",
				// to: "/career/volunteer", // corrected to include the full path
				 to: "volunteer", // corrected to include the full path
			},
			{
				title: "Career",
				to: "Careerr", // corrected to include the full path
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
        name: "Krishna",
		position: "Founder",
		Description:"Mangatha Pvt Ltd has transformed our community. Through their unified investment approach and strong leadership, they have empowered us to take charge of our future. They are not just building a business; they are building trust and social value.",
	},
	{
		id: 2,
        name: "Chandran",
		position: "Hr",
		Description:"I am proud to be a micro-investor with Mangatha Pvt Ltd. Their commitment to professional administration and community leadership has brought us together like never before. They are setting a new standard for community development.",
	},
	{
		id: 3,
        name: "Akilan",
		position: "Hr",
		Description:"Thanks to Mangatha Pvt Ltd, our community is thriving. Their self-sufficient business model and dedication to nurturing strong community leaders have created opportunities we never thought possible. They truly care about our success and well-being.",
	},
];



export const team = [
	{
		id: 1,
		image: HeroIcon2,
		category: " Beauty & Hair dressing ",
		title: "Look like those professional beauticians and hairdressers. Get full beauty treatment here from hair cutting to facial.",
		price:"LKR.59000",
		aosDelay: "0",
	},

]
