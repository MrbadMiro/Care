import React from "react";
import { footerimg, footerupimg, arrow, Footer_icon_1 } from "../assets";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";

import { logo } from "../assets";
 
 
const Footer = () => {
	const sectionStyle = {
		backgroundImage: ` url(${footerimg})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<section className="w-full flex flex-col  ">
			<div className="flex flex-col  w-ful">
				{/* upper div */}
				<div className="bg-Orange w-full md:px-12 px-6   relative " >
					<img src={footerupimg} alt=""  className="hidden md:flex absolute left-1/4  bottom-0 =z-10 animate-bounce-horizontal  " />
					<div className="grid md:grid-cols-2  w-full my-[50px]">
						{/* left side */}
						<div className="flex flex-col gap-[16px]">
							<div className="flex flex-cols-2">
								<div></div>
								<div>
									<p className="font-caveat font-bold text-white text-[22px] leading-[22px]     tracking-[2.2px]">
										BECOME A VOLOUNTEER
									</p>
								</div>
							</div>
							<div>
								<p className="font-nunito font-extrabold animatecss-backInLeft animat text-white text-[40px] leading-[50px] ">
									Let's Make Differnece
								</p>
							</div>
						</div>

						{/* right side */}
						<div>
							<div className="flex flex-cols-2 gap-[10px] items-center md:justify-end mt-2">
								<div className="hidden md:flex justify-end">
									<img src={arrow} className="animate-bounce" alt="" />
								</div>
								<div>
									{" "}
									<p className="font-nunito bg-white rounded-full px-[37px] py-[13px] font-bold  text-[17px] leading-[30px] tracking-[0.25px] text-[#122F2A]">
										Become A Volunteer
									</p>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* down div */}
				<div className="w-full md:px-12 px-6 mt" style={sectionStyle}>
					<div className="flex flex-col">
						{/* top div */}
						<div className="grid grid-col-1 md:grid-cols-2 items-center justify-between  border-b-[0.1px] ">
							{/* left side */}

							<div className="flex flex-cols-2 py-8 items-center gap-3 ">
								<div>
									<img src={Footer_icon_1} alt="" />
								</div>
								<div className="flex flex-col">
									<p className="font-nunito font-extrabold text-white text-[22px] leading-[26.4px] tracking-[0.33px]">
										Our Newslatter
									</p>
									<p className="font-rubik font-normal text-[#BCBCBC] text-[16px] leading-[28.px] tracking-[0.24px]">
										We are dolor sit amet csectetur
									</p>
								</div>
							</div>

							{/* right Side */}
							<div className="flex items-center justify-between bg-white rounded-md px-4 my-2 mt ">
								<input
									type="email"
									className="bg-white p-2 font-rubik text-[16x] outline-none  rounded-md justify-end  items-end"
									placeholder="Enter Email Address "
								/>
								<FaTelegramPlane className="text-[#ffA415]" />
							</div>
						</div>

						{/* Second Div */}
						<div className="grid md:grid-cols-4 gap-3 items-start justify-between mt-2 py-5">
							{/* 1st div */}
							<div className="flex flex-col items-start">
								<img src={logo} alt="" />
								<p className="font-rubik font-normal text-[#BCBCBC] text-[16px] leading-[29px] tracking-[0.24px] mt-2 text-wrap">
									We help businesses maximize their online presence with a
									personalized approach to digital marketing.
								</p>
								<div className="flex flex-cols-2 mt-2 gap-3 items-center">
									<FaPhoneVolume className="text-[34px] text-[#FFA415]" />
									<div className="flex flex-col ">
										<p className="font-rubik font-medium text-[#FFFFFF] text-[16px] leading-[25px] tracking-[0.24px] mt-2 text-wrap">
											Hotline 24/7
										</p>
										<p className="font-rubik font-medium text-[#FFFFFF] text-[16px] leading-[25px] tracking-[0.24px] mt-2 text-wrap">
											(+99) 95464 2569
										</p>
									</div>
								</div>
							</div>
							{/* 2nd div */}
							<div className="flex flex-col text-left pt-2">
								<p className="font-nunito font-extrabold text-white text-[22px] leading-[26.4px] tracking-[0.33px]">
									Service
								</p>
								<div className="decoration-none mt-2 font-nunito font-normal text-[#BCBCBC] text-[16px] leading-[41px] tracking-[0.33px]">
									<p>Give Donation</p>
									<p>Education Support</p>
									<p>Our Campaign</p>
									<p>Our Campaign</p>
									<p>Our Campaign</p>
								</div>
							</div>
							{/* 3rd div */}
							<div className="flex flex-col text-left pt-2">
								<p className="font-nunito font-extrabold text-white text-[22px] leading-[26.4px] tracking-[0.33px]">
									Quick Link
								</p>
								<div className="decoration-none mt-2 font-nunito font-normal text-[#BCBCBC] text-[16px] leading-[41px] tracking-[0.33px]">
									<p>About Us</p>
									<p>Our News</p>
									<p>Our Campaign</p>
									<p>Contact Us</p>
									<p>Login</p>
								</div>
							</div>
							{/* 4th div */}
							<div className="flex flex-col text-left pt-2 ">
								<p className="font-nunito font-extrabold text-white text-[22px] leading-[26.4px] tracking-[0.33px]">
									Contact Info
								</p>

								<div className="flex flex-cols-2 font-nunito font-normal text-[#BCBCBC] text-[16px]  gap-2 items-center mt-2 ">
									<FaRegClock className="text-[#FFA415] text-[17px]" />
									<div className="flex-col">
										<p>Open Hours of Government: Mon</p>
										<p>- Fri: 8.00 am. - 6.00 pm.</p>
									</div>
								</div>

								<div className="flex flex-cols-2 font-nunito font-normal text-[#BCBCBC] text-[16px]  gap-2 items-center mt-2 ">
									<CiLocationOn className="text-[#FF5528] text-[17px]" />
									<div className="flex-col">
										<p>13/A, Miranda Halim City .</p>
									</div>
								</div>
								<div className="flex flex-cols-2 font-nunito font-normal text-[#BCBCBC] text-[16px]  gap-2 items-center mt-2 ">
									<MdForwardToInbox  className="text-[#8139E7] text-[17px]" />
									<div className="flex-col">
										<p>needhelp@company.com.</p>
									</div>
								</div>
							</div>
						</div>

						{/* Third Div */}
						<div className="border-t-[0.1px]  border-[]py-4 flex items-center justify-center">
                             <p className="font-nunito font-normal text-[#BCBCBC] text-[16px]">© Copyright 2024 by Tetra Vi.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;