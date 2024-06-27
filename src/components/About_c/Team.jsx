import React, { useEffect, useState } from "react";
import { team } from "../../Data";
import {
	about_1,
	about_2,
	about_3,
	about_4,
	A_1_icon,
	A_2_icon,
} from "../../assets";

const Team = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slideWidth = 100; // Adjust this based on your slide width

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % team.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + team.length) % team.length);
	};

	return (
		<div className="w-full md:px-12 px-6 flex flex-col items-center justify-center py-24">
			<div className="flex items-center gap-2">
				<div className="flex items-center ">
					<img src={A_1_icon} alt="" />
					<img src={A_2_icon} alt="" className="animate-bounce" />
				</div>
				<p className="font-caveat font-bold text-[#1EA8DF] text-[22px] leading-[22px] tracking-[2.2px]">
					OUR EXPERT TEAM
				</p>
			</div>
			<div className="flex w-full justify-center">
				<p className="font-nunito font-bold text-[#122F2A] text-[32px] md:text-[40px] leading-[50px] mt-[16px]">
					Meet The Team Member
				</p>
			</div>
			<div className="w-full h-fit mt-2 mb-24 md:mb-0 relative overflow-hidden">
				<div
					className="flex transition-transform duration-300 ease-out"
					style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
				>
					{team.map((member, index) => (
						<div
							key={index}
							className="slide flex-shrink-0 w-full"
							style={{ width: `${slideWidth}%` }}
						>
							<img src={member.photo} alt={member.name} className="w-full" />
							<p>{member.name}</p>
							<p>{member.position}</p>
						</div>
					))}
				</div>
				<button onClick={prevSlide} className="absolute left-0">Prev</button>
				<button onClick={nextSlide} className="absolute right-0">Next</button>
			</div>
		</div>
	);
};

export default Team;
