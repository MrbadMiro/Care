import React from "react";
import {
	Hero_imgb1,
	Hero_imgb2,
	about_4,
	
} from "../../assets";
const Career_form = () => {
	return (
		<div className="w-full items-center justify-center md:px-24 px-6 py-12">
			<div className="grid md:grid-cols-2">
			  {/* div1 */}
				<div className="flex flex-col justify-start gap-4 pr-2">
					<div className="flex   4">
						<p className="font-nunito font-extrabold text-[#122f2A] text-[24px] leading-[28.4px] tracking-[0.33px]">Join Us in Building a Better Future</p>
					</div>
					<div>
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] text-left">Together, we can build a community where trust, social value, and economic prosperity go hand in hand. <br /></p>
					</div>
					<div>
						<p className="font-nunito font-extrabold text-[#122f2A] text-[24px] leading-[28.4px] tracking-[0.33px]"> Join us at Mangatha Pvt Ltd as we work towards a brighter future for Valvetithurai. <br /></p>
					</div>
					{/* <div>
                        <p className="font-caveat font-bold text-[#636363] text-[16px] leading-[28px] ">HELPED FUND 589,537 PROJECTS IN 24 COUNTRIES, BENEFITING OVER
						45K+ MILLION PEOPLE.</p>
					</div>*/}
					<div className="mb-4 flex flex-col ">
						<p className="flex gap-2 font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-2">
							{" "}
							<img src={about_4} alt="" /> Help empower and develop the Valvetithurai community.
						</p>
						<p className="flex gap-2 font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-2">
							{" "}
							<img src={about_4} alt="" /> Gain valuable leadership and management experience.
						</p>
						<p className="flex gap-2 font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-2">
							{" "}
							<img src={about_4} alt="" /> Connect with passionate, like-minded individuals.
							corporate poor.
						</p>
						<p className="flex gap-2 font-rubik font-normal text-[#636363]   text-[16px] leading-[28px] mt-2">
							{" "}
							<img src={about_4} alt="" /> Join a team dedicated to driving meaningful change.
						</p>
						<p className="flex gap-2 font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-2">
							{" "}
							<img src={about_4} alt="" /> Highlight your commitment to social responsibility.

						</p>
					</div> 
					<div className="grid md:grid-cols-2 gap-2 ">
						<div className="rounded-md overflow-hidden   "><img src={Hero_imgb1} alt=""  className="object-cover h-[200px] "/></div>
						<div className="rounded-md overflow-hidden  "><img src={Hero_imgb2} alt=""  className="object-cover h-[200px]"/></div>
						 
 
					</div>

				</div>
				{/* div2 */}
				<div className="flex flex-col gap-4">
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
					<input
						type="tel"
						name="Phone"
						className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
						placeholder="Phone"
					/>
					<div className="grid md:grid-cols-2">
						<input
							type="text"
							name="Name"
							className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md  w-full"
							placeholder="Addess"
							required
						/>

						<select id="options" name="options" className="px-2 py-3 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md  w-full">
							<option value="option1" className="text-[14px] text-navy font-rubik">Occupation</option>
							<option value="option2" className="text-[14px] text-navy font-rubik">Doctor</option>
							<option value="option3" className="text-[14px] text-navy font-rubik">Lawyear</option>
						</select>
					</div>
					<textarea
						name="Message"
						maxLength="200"
						className="px-2 py-4 outline-none text-[14px] text-navy font-rubik border border-[#DDDDDD] rounded-md w-full"
						placeholder="Message"
						required
					/>
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
	);
};

export default Career_form;
