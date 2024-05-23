import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { logo } from "../../assets";
import { navLinks } from "../../Data";

import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import { FaHeart } from "react-icons/fa";

const Navbar = () => {
	const [isSideMenuOpen, setSideMenu] = useState(false);

	const openSideMenu = () => {
		setSideMenu(true);
	};

	const closeSideMenu = () => {
		setSideMenu(false);
	};

	return (
		<div className="fixed z-20  top-0  w-full flex md:px-12 px-6 border-b border-b-white border-opacity-20 ">
			<div className="  mx-auto flex w-full max-w-7xl justify-between  py-5 text-sm text-white font-bold font-nunito">
				{/* Left Section */}
				<div className="flex items-center gap-10">
					{/* Logo */}
					<img src={logo} alt="Logo" className="h-[60px]" />

					{isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
					{/* Navitems */}
					<div className="hidden md:flex items-center gap-4 transition-all">
						{navLinks.map((d, i) => (
							<div key={i} className="relative group px-2 py-3 transition-all">
								<Link to={d.to} className="flex items-center gap-2">
									<span>{d.title}</span>
									{d.submenu && (
										<IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
									)}
								</Link>

								{/* Dropdown */}
								{d.submenu && (
									<div className="absolute right-0 z-50 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
										{d.submenu.map((ch, i) => (
											<Link
												key={i}
												to={ch.to}
												className="flex items-center text-black py-1 pl-6 pr-8">
												<span className="pl-3">{ch.title}</span>
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Right Section */}
				<div className="flex gap-2">
					<button className="hidden px-4 py-2 bg-Orange text-white font-bold rounded-full md:flex items-center gap-1">
						<FaHeart />
						Donate Now
					</button>

					<select id="cars" className="bg-Orange p-4 ">
						<option value="volvo">English</option>
						<option value="saab">Tamil</option>
						<option value="opel">Shinhala</option>
						
					</select>
				</div>
				<FiMenu
					className="cursor-pointer text-4xl md:hidden"
					onClick={openSideMenu}
				/>
			</div>
		</div>
	);
};

export default Navbar;
