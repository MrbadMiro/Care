import React from "react";
import {
	About_mimg,
	About_Simg,
	About_S2img,
	About_S3img,
	About_icon1,
	About_icon2,
	About_icon3,
	About_icon4,
	About_sign,
	About_man,
} from "../../assets";
const About = () => {
	return (
		<div className="w-full flex flex-col sm:px-12 px-3 my-24 items-center justify-center">
			<div className="w-full grid md:grid-cols-2">
				{/* 1st div */}
				<div className="relative flex sm:pl-[100px] sm:pr-[10px] py">
					<img
						src={About_mimg}
						alt=""
						className=" object-cover w-full h-[598px] rounded-[30px]  "
					/>

					<div className="hidden md:flex absolute border-10 border-white top-[80px] animate-bounce-slow -left-[4px]">
						<img src={About_Simg} alt="" className=" object-cover" />
					</div>
					<div className="hidden md:flex -z-10 absolute border-10 animate-bounce-slow top-[310px] -left-[4px]">
						<img src={About_S2img} alt="" className="" />
					</div>
					<div className="hidden md:flex -z-10 absolute border-10 animate-pulse-slow animate__infinite -bottom-[10px] left-[50px]">
						<img src={About_S3img} alt="" className="" />
					</div>
					<div className=" flex flex-cols-2 z-1 absolute  bottom-[8px] right-0 sm:right-[10px]">
						<div className="Flex items-center justify-center bg-[#FFA415] p-[16px]">
							<img src={About_icon4} alt="" />
						</div>
						<div className="Flex items-center justify-center bg-[#FF5528] p-[16px] rounded-br-[30px]">
							<p className="font-caveat font-bold text-white text-[22px] leading-[24px] tracking-[2.2px]">
								Always Help Us!
							</p>
						</div>
					</div>
				</div>

				{/* 2nd div */}
				<div className="flex flex-col px-[15px] mt-24 md:mt-0 ">
					<div className="flex w-full">
						<p className="font-caveat font-bold text-Orange  text-[22px] leading-[22px] tracking-[2.2px]">
							OUR ABOUT US
						</p>
					</div>
					<div className="flex w-full">
						<p className="font-nunito font-bold text-[#122F2A] text-[32px] md:text-[40px] leading-[50px] mt-[16px]">
							We Believe This Lifes About Give For Poor People.
						</p>
					</div>
					<div className="flex w-full">
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] mt-[16px]">
							Poor address a range of simply application and infrastructure this
							of passages of available, but the majority have suffered poor
							alteration in some form.
						</p>
					</div>
					<div className="flex flex-cols-3 mt-5 justify-between py-5 border-b border-b-[#DDDDDD] ">
						<div className="flex flex-col items-center justify-center gap-3 px-[15px]">
							<img
								src={About_icon3}
								alt=""
								className=" object-cover w-[50px] h-[50px]"
							/>
							<p className="font-nunito font-extrabold text-[#122F2A] text-[18px] leading-[21px] ">
								Join Our Team
							</p>
							<p className="font-caveat font-bold text-[#FFA415] text-[26px] leading-[26px] tracking-[2.2px]">
								5,472
							</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-3 px-[15px]">
							<img
								src={About_icon2}
								alt=""
								className=" object-cover w-[50px] h-[50px]"
							/>
							<p className="font-nunito font-extrabold text-[#122F2A] text-[18px] leading-[21px] ">
								Donate Now
							</p>
							<p className="font-caveat font-bold text-Orange text-[26px] leading-[26px] tracking-[2.2px]">
								$30,768
							</p>
						</div>
						<div className="flex flex-col items-center justify-center gap-3 px-[15px]">
							<img
								src={About_icon1}
								alt=""
								className=" object-cover w-[50px] h-[50px]"
							/>
							<p className="font-nunito font-extrabold text-[#122F2A] text-[18px] leading-[21px] ">
								Total Fund Raised
							</p>
							<p className="font-caveat font-bold text-[#8742E8] text-[26px] leading-[26px] ">
								1,193,210
							</p>
						</div>
					</div>
					<div className="flex flex-cols-2 my-10 items-center justify-between ">
						<div className="flex flex-cols-2 gap-3 items-center justify-center ">
							<div className="flex  rounded-full border-dotted border-2 border-[#FF5528] p-1 ">
								<img src={About_man} alt=""  className=""/>
							</div>
							<div className="flex flex-col ">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[24px] leading-[28.4px] tracking-[0.33px]">Kiri</p>
								<p className="font-rubik font-normal text-[#122F2A] text-[16px] leading-[28px] ">Founder</p>
							</div>
						</div>
            <div>
              <img src={About_sign} alt="" />
            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
