import React from "react";
import { SlCalender } from "react-icons/sl";
import { FaFolder } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import {
	about_1,
	A_1_icon,
	A_2_icon,
	Progress_img1,
	Progress_img2,
	man1,
} from "../../assets";
const Ourstory = () => {
	return (
		<div className="w-full flex flex-col md:px-12 px-6 py-12">
			<div className="flex justify-center py-12 gap-2  ">
				<div className="flex items-center ">
					<img src={A_1_icon} alt="" />
					<img src={A_2_icon} alt="" className="animate-bounce" />
				</div>

				<p className="font-caveat font-bold text-Orange   text-[22px] leading-[22px] tracking-[2.2px]">
					OUR STORY
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3  gap-4 ">
				{/* div1 */}
				<div className="w-full  md:col-span-2     flex-col">
					<div className="flex 	 overflow-hidden">
						<img
							src={about_1}
							alt=""
							className="w-full h-[300px] object-cover rounded-md"
						/>
					</div>
					<div className="w-full bg-[#F1F6F7] py-6 px-6">
						<div className="skill-box my-6">
							<div className="skill-bar mt-2 w-full h-2 bg-gray-300 rounded-lg">
								<span
									className="skill-per html relative block h-full bg-Orange rounded-lg"
									style={{ width: "85%" }}>
									<span className="tooltip absolute right-[-14px] top-[-40px] text-xs font-medium text-white bg-Orange py-1 px-2 rounded-md">
										85%
									</span>
								</span>
							</div>
							<div className="flex items-center justify-between">
								<span className="title block text-base font-semibold text-green2">
								$13,000 Goals
								</span>
								<span className="title block text-base font-semibold text-green2">
								$5,000 Donate
								</span>
							</div>
							<div className="mt-8 h-[2px] bg-[#DDDDDD] w-full relative">
                               <div className="w-[10px] top-[-4px] h-[10px] rounded-full bg-Orange absolute  animate-moveLeftRight">

							   </div>
							</div>
							<div className="flex items-center justify-center py-6 ">
						<button className="px-4 py-2 bg-[#FFA415] font-nunito  rounded-full font-normal text-[#ffffff] text-[16px] leading-[28px] ">
							Donate Now
						</button>
					</div>
						</div>
					</div>
					<div className="flex mt-4">
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] text-justify">
							Poor address a range of simply application and infrastructure this
							of passages of available, but the majority have suffered poor in
							some form.Lorem Ipsum is simply dummy text of the printing and
							industry has been the industry’s standard dummy text ever since
							the 1500s, when this poor man an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop.
						</p>
					</div>
					<div className="flex mt-4">
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] text-justify">
							The Poor address a range of simply application and infrastructure
							this of passages of available, majority have suffered poor in some
							form.Lorem Ipsum is simply dummy text of the printing industry has
							been the industry’s standard dummy text ever since the
						</p>
					</div>
					<div className="flex mt-4">
						<p className="font-nunito font-extrabold text-[#122f2A]  text-[40px] leading-[48px] text-left">
							Poor Summary :
						</p>
					</div>
					<div className="flex mt-4">
						<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] text-justify">
							The Poor address a range of simply application and infrastructure
							this of passages of available, majority have suffered poor in some
							form.Lorem Ipsum is simply dummy text.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-4 mt-2">
						<div className="flex">
							<img src={Progress_img1} alt="" className=" object-cover" />
						</div>
						<div>
							<img src={Progress_img2} alt="" className=" object-cover" />
						</div>
					</div>
					<div className="flex items-center justify-center py-6 ">
						<button className="px-4 py-2 bg-[#FFA415] font-nunito  rounded-full font-normal text-[#ffffff] text-[16px] leading-[28px] ">
							Donate Now
						</button>
					</div>
				</div>

				{/* div2 */}
				<div className=" w-full  px-6 flex flex-col ">
					<div className="w-full bg-Orange rounded-md flex ">
						<div className=" w-full rounded-md bg-[#F1F6F7] mt-2  py-6">
							<div className="flex flex-col w-full">
								<div className="flex  w-full items-center justify-center gap-4 py-6 border-b-2">
									<div>
										<img src={man1} alt="" className="w-[71px] h-[71px]" />
									</div>
									<div className="flex flex-col ">
										<p className="font-nunito font-extrabold text-[#122F2A]  text-[24px] leading-[28px] text-justify">
											Phillip Haris
										</p>

										<p className="font-rubik font-normal text-[#636363]  text-[16px] leading-[28px] text-justify">
											Founder
										</p>
									</div>
								</div>
								<div className="flex flex-col mt-4 justify-center items-center gap-2">
									<div className="flex gap-2">
										<SlCalender className="text-[#ffa415]" />
										<p className="font-rubik font-normal text-[#636363]  text-[16px]    ">
											Sep 2024
										</p>{" "}
									</div>
									<div className="flex gap-2">
										<FaFolder className="text-[#ffa415]" />{" "}
										<p className="font-rubik font-normal text-[#636363]  text-[16px]    ">
											Environment
										</p>{" "}
									</div>
									<div className="flex gap-2">
										<MdLocationOn className="text-[#ffa415]" />
										<p className="font-rubik font-normal text-[#636363]  text-[16px]    ">
											London, Canada
										</p>
									</div>
								</div>
								<div></div>
							</div>
						</div>
					</div>
					<div className="w-full bg-Orange rounded-md flex mt-20 ">
						<div className=" w-full rounded-md bg-[#F1F6F7] mt-2 px-24 py-6">
							<div className="flex flex-col w-ful items-center justify-centerl">
								<div>
									<p className="font-nunito font-extrabold text-[#122F2A]  text-[24px] leading-[28px]  ">
										Share Causes:
									</p>
								</div>
								<div className="flex mt-4 gap-4 py-4 items-center">
									<div className="flex items-center justify-center bg-white rounded-full w-[42px] h-[42px]">
										<FaFacebookF />
									</div>
									<div className="flex items-center justify-center bg-white rounded-full w-[42px] h-[42px]">
										<FaInstagram />
									</div>
									<div className="flex items-center justify-center bg-white rounded-full w-[42px] h-[42px]">
										<FaPinterest />
									</div>
									<div className="flex items-center justify-center bg-white rounded-full w-[42px] h-[42px]">
										<IoLogoYoutube />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Ourstory;
