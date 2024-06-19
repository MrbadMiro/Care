/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		animatedSettings: {
			animatedSpeed: 1000,
			heartBeatSpeed: 500,
			hingeSpeed: 2000,
			bounceInSpeed: 750,
			bounceOutSpeed: 750,
			animationDelaySpeed: 500,
			classes: ["shakeX", "heartBeat"],
		},
		extend: {
			keyframes: {
				moveLeftRight: {
				  '0%, 100%': { transform: 'translateX(0)' },
				  '50%': { transform: 'translateX(calc(100% - 10px))' }, // Ensures dot stays within bounds
				},
			  },
			  animation: {
				moveLeftRight: 'moveLeftRight 2s infinite',
			  },
			colors: {
				primary: "#ffffff",
				Orange: "#ff5528",
				green2:"#122F2A"
				
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
				caveat: ["Caveat", "cursive"],
			},

			animation: {
				"bounce-slow": " bounce 3s linear infinite",
				"pulse-slow": " pulse 3s linear infinite",
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [
		require('tailwindcss-animatecss'),
		require("tailwindcss-debug-screens"),
	],
};
