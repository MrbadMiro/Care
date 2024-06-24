import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import {
	about_1,
	about_2,
	about_3,
	about_4,
	Hero_imgb1,
	A_1_icon,
	A_2_icon,
	About_S3img,
} from "../../assets";
import { motion } from "framer-motion";

const Contact_form = () => {
	return (
		<div className="w-full md:px-12 px-6 py-24">
			<div className="grid md:grid-cols-2 ">
				<div className="flex items-center justify-center relative">
					<div className="hidden md:flex  absolute border-10 animate-pulse animate__infinite top-[20px] left-[60px]    ">
						<img src={About_S3img} alt="" className="" />
					</div>
					<div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] transform rotate-45  ">
						 
						{/* Top Left Diamond */}
						<div
							className="absolute w-24 h-24 rounded-md md:w-32 md:h-32 overflow-hidden transform rotate-90"
							style={{ top: "0", left: "0" }}>
							<img
								className="object-cover w-full h-full  "
								src={Hero_imgb1}
								alt="Image 1"
							/>
						</div>

						{/* Top Right Diamond */}
						<div
							className="absolute w-24 h-24 md:w-32 rounded-md md:h-32 overflow-hidden transform rotate-270"
							style={{ top: "0", right: "0" }}>
							<img
								className="object-cover w-full h-full  "
								src={Hero_imgb1}
								alt="Image 2"
							/>
						</div>
						{/* Bottom Left Diamond */}
						<div
							className="absolute w-24 h-24 md:w-32 rounded-md md:h-32 overflow-hidden transform rotate-270"
							style={{ bottom: "0", left: "0" }}>
							<img
								className="object-cover w-full h-full  "
								src={Hero_imgb1}
								alt="Image 3"
							/>
						</div>
						{/* Bottom Right Diamond */}
						<div
							className="absolute w-24 h-24 md:w-32 rounded-md md:h-32 overflow-hidden transform rotate-270"
							style={{ bottom: "0", right: "0" }}>
							<img
								className="object-cover w-full h-full  "
								src={Hero_imgb1}
								alt="Image 4"
							/>
						</div>
						{/* Center Circle */}
						<div
							className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex justify-center items-center"
							style={{
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
							}}>
							<img
								className="object-cover w-full h-full"
								src={Hero_imgb1}
								alt="Center Image"
							/>
						</div>
					</div>
					<div className="  h-[40px] w-[200px] gap-2 absolute flex justify-center items-center bottom-0 -right-2 md:right-24 transform -rotate-45">
						<FiPhoneCall className="text-Orange transform rotate-45 animate-pulse " />
						<div className="flex flex-col transform rotate-45 gap-2 items-center  ">
							<p className="font-rubik text-Orange font-bold transform -rotate-45 text-[18px] text-left">
								Need Help Now?
							</p>
							<p className="font-rubik font-bold text-green2 tracking-[1px] transform -rotate-45 text-[14px] text-left ">
								+0774984984
							</p>
						</div>
					</div>
				</div>
				<div>
					<div>
						<div className="flex  items-center ">
							<div className="flex items-center ">
								<img src={A_1_icon} alt="" />
								<img src={A_2_icon} alt="" className="animate-bounce" />
							</div>

							<p className="font-caveat font-bold text-Orange  text-[22px] leading-[22px] tracking-[2.2px]">
								OUR CONTACT NOW
							</p>
						</div>

						<div className="flex w-full">
							<motion.p
								initial={{ x: 100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.5,
									x: { type: "spring", stiffness: 60 },
									opacity: { duration: 0.6 },
									ease: "easeIn",
								}}
								className="font-nunito font-bold text-[#122F2A] text-[32px] md:text-[40px] leading-[50px] mt-[16px]">
								Our Volunteer Become Us This Contact Now!
							</motion.p>
						</div>
						<div className="flex ">
							<motion.p
								initial={{ x: 100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.6,
									x: { type: "spring", stiffness: 60 },
									opacity: { duration: 1 },
									ease: "easeIn",
									duration: 0.6,
								}}
								className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px]  mt-[16px]">
								Have questions or want to get involved? Contact us today to learn more about our initiatives and how you can contribute to our community's success.
							</motion.p>
						</div>

						<div className="flex flex-col mt-8">
							<div className="grid md:grid-cols-2 gap-2">
								<input
									type="text"
									name="Name"
									className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md  w-full"
									placeholder="Your Name"
									required
								/>
								<input
									type="email"
									name="Email"
									className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
									placeholder="Enter Email"
									required
								/>
							</div>
							<div className="grid ss:grid-cols-2 gap-3 mt-4">
								<input
									type="tel"
									name="Phone"
									className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
									placeholder="Phone"
								/>
								<input
									type="text"
									name="Subject"
									className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
									placeholder="Subject"
								/>
							</div>
							<div className="w-full mt-4">
								<textarea
									name="Message"
									maxLength="200"
									className="px-2 py-4 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
									placeholder="Message"
									required
								/>
							</div>
							<div className="w-full flex fle-col mt-2">
								<button
									className="overflow mt-4 bg-[#FFA415] rounded-md group relative overflow-hidden text-[12px] text-white px-8 py-3 before:absolute before:top-0 before:-left-full before:h-full before:w-full before:bg-[#ff5f35] before:transition-transform before:duration-500 hover:before:translate-x-full"
									type="submit">
									<span className="relative z-10 block transition-colors font-semibold duration-300 group-hover:text-white">
										Send Message
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact_form;
