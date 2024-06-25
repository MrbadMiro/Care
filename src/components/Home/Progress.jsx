import React from "react";
import {
	Progress_img1,
	Progress_img2,
	Progress_img3,
	Progress_icon1,
	Progress_icon2,
	Progress_icon3,
	Progress_Arrow_img,
} from "../../assets";

const Progress = () => {
	const createSectionStyle = (imageUrl) => ({
		backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
	});

	const sectionStyle = createSectionStyle(Progress_img1);
	const sectionStyle2 = createSectionStyle(Progress_img2);
	const sectionStyle3 = createSectionStyle(Progress_img3);
	return (
		<div className="flex flex-col md:px-12 px-3 w-full  my-24 md:mt-0">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 relative md:gap-4 gap-10 w-full ">
				{/* 1st div */}
				<div
					className="relative flex items-center justify-center px-[15px] py-24 md:rounded-b-md boxShadow w-full"
					style={sectionStyle}>
					<p className=" text-center text-white  ">
					To unite micro-investors, foster professional administration, and nurture strong leaders, driving social value and trust within our community.
					</p>
					<div className="flex items-center justify-center Flex-col  absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img
								src={Progress_icon1}
								alt=""
								className="w-8 h-8 md:w-auto md:h-auto"
							/>
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px]">
									Misson
								</p>
								{/* <p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p> */}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 top-6 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="w-[75px] h-[60px] bg-[#F1F6F7] rounded-t-0 rounded-b-[50px] flex items-center justify-center">
							<p className="font-caveat font-bold text-[#FFA415] text-[34px] leading-[34px] ">
								01
							</p>
						</div>
					</div>
					<div className="  flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 -bottom-5   w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex items-center justify-center bg-[#FFA415] rounded-full w-[42px] h-[42px]">
							<img src={Progress_Arrow_img} alt="" className=" " />
						</div>
					</div>
				</div>
				{/* 2nd div */}

				<div
					className="relative flex  items-center py-24 md:rounded-b-md justify-center px-[15px] boxShadow w-full"
					style={sectionStyle2}>
					{/* <img
						src={Progress_img2}
						alt=""
						className="object-cover w-full "
					/> */}
					<p className=" text-center text-white  ">
						{" "}
						Empowering Valvetithurai through unified investments, professional administration, and strong leadership, fostering a prosperous and resilient community.
					</p>
					<div className="absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img src={Progress_icon2} alt="" className="w-8 h-8  md:h-auto" />
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px]">
									Vison
								</p>
								<p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 top-6 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="w-[75px] h-[60px] bg-[#F1F6F7] rounded-t-0 rounded-b-[50px] flex items-center justify-center">
							<p className="font-caveat font-bold text-[#FF5528] text-[34px] leading-[34px] ">
								02
							</p>
						</div>
					</div>
					<div className="  flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 -bottom-5   w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex items-center justify-center bg-[#FFA415] rounded-full w-[42px] h-[42px]">
							<img src={Progress_Arrow_img} alt="" className=" " />
						</div>
					</div>
				</div>
				{/* 3rd div */}
				<div
					className="relative flex items-center py-24 md:rounded-b-md justify-center px-[15px] boxShadow sm:mt-10 md:mt-0 w-full"
					style={sectionStyle3}>
					<p className=" text-center text-white mt-2">
					Community Engagement | Unified Micro-Investors | Consolidation of Resources | Self-Sufficiency | Leadership Development
					</p>
					<div className="absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img
								src={Progress_icon3}
								alt=""
								className="w-8 h-8 md:w-auto md:h-auto"
							/>
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] tracking-[2px] md:leading-[28.8px]">
									Value
								</p>
								<p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 top-6 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="w-[75px] h-[60px] bg-[#F1F6F7] rounded-t-0 rounded-b-[50px] flex items-center justify-center">
							<p className="font-caveat font-bold text-[#8742E8] text-[34px] leading-[34px] ">
								03
							</p>
						</div>
					</div>
					<div className="  flex items-center justify-center  absolute    left-1/2 transform -translate-x-1/2 -bottom-5   w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex items-center justify-center bg-[#FFA415] rounded-full w-[42px] h-[42px]">
							<img src={Progress_Arrow_img} alt="" className=" " />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;