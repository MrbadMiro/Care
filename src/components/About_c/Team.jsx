import React, { useEffect, useState } from "react";
import { TeamData } from "../../Data";
import {
	about_1,
	about_2,
	about_3,
	about_4,
	A_1_icon,
	A_2_icon,
	About_man,
	About_man1,
	About_man2,
	About_man3,
	About_man4,
	About_man5,
	About_man6,
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
			<div className="w-full grid md:grid-cols-3 mt-8 items-center justify-center gap-y-16">
				{TeamData.map((item, index) => (
					<div className="flex flex-col items-center justify-center">
					<div className="flex">
						<img
							src={item.image}
							alt=""
							className="h-[300px]  w-[300px] object-cover"
						/>
					</div>
					<div className="flex flex-col text-center items-center justify-center mt-4">
						<p className="font-nunito font-bold text-[#122F2A] text-[18px] md:text-[24px] leading-[20px] mt-[16px]">
							{item.name}
						</p>
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-[16px] md:px-6 h-[60px] ">
							{item.position}
						</p>
					</div>
				</div>
				))}

				
			</div>
		</div>
	);
};

export default Team;
