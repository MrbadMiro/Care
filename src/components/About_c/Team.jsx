import React from 'react';
import {
	about_1,
	about_2,
	about_3,
	about_4,
	A_1_icon,
	A_2_icon,
} from "../../assets";
const Team = () => {
    return (
        <div className='w-full md:px-12 px-6 flex flex-col items-center justify-center py-24'>
        <div className="flex  items-center ">
						<div className="flex items-center ">
							<img src={A_1_icon} alt="" />
							<img src={A_2_icon} alt="" className="animate-bounce" />
						</div>

						<p className="font-caveat font-bold text-[#1EA8DF]  text-[22px] leading-[22px] tracking-[2.2px]">
                        OUR EXPERT TEAM
						</p>
					</div>
                    <div className="flex w-full justify-center ">
						<p
							 
							className="font-nunito font-bold text-[#122F2A] text-[32px] md:text-[40px] leading-[50px] mt-[16px]">
							Meet The Team Member
						</p>
					</div>
                    <div className='flex items-center justify-center py-24'>

                    </div>

            
        </div>
    );
}

export default Team;
