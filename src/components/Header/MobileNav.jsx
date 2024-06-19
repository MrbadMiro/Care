import SingleNavItem from "./SingleNavItem";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../../Data";
import React, { useState } from "react";

const MobileNav = ({ closeSideMenu }) => {
	return (
		<div className="fixed z-20 left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden ">
			<div className="h-full w-[65%] z-50 bg-white px-4 py-4">
				<section className="flex justify-end">
					<AiOutlineClose
						onClick={closeSideMenu}
						className="cursor-pointer text-black text-4xl "
					/>
				</section>
				<div className="flex flex-col text-base gap-2 transition-all">
					{navLinks.map((d, i) => (
						<SingleNavItem
							key={i}
							title={d.title}
							to={d.to}
							submenu={d.submenu}
						/>
					))}
				</div>

				<section className="flex flex-col gap-8 mt-4 items-center">
					{/* <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
              Login
            </button>
  
            <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
              Register
            </button> */}
					<button
						className="hidden px-4 py-2 bg-Orange text-white font-bold rounded-full md:flex items-center gap-1"
						onClick={handleDonateClick}>
						<FaHeart />
						Donate Now
					</button>

					<select id="language" className="bg-Orange p-2 ">
						<option value="english">English</option>
						<option value="tamil">Tamil</option>
						<option value="sinhala">Sinhala</option>
					</select>
				</section>
			</div>
		</div>
	);
};

export default MobileNav;
