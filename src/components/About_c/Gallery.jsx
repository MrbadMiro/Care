import React from 'react';
import {
	Gallery_img1,
    Gallery_img2,
    Gallery_img3,
    Gallery_img4,
    Gallery_img5,
    Gallery_img6,
	A_1_icon,
	A_2_icon,
} from "../../assets";
const Gallery = () => {
    return (
        <div className='flex flex-col md:px-12 px-6 pb-24 items-center justify-center'>
			<div className="flex items-center gap-2 mb-8">
				<div className="flex items-center ">
					<img src={A_1_icon} alt="" />
					<img src={A_2_icon} alt="" className="animate-bounce" />
				</div>
				<p className="font-caveat font-bold text-[#1EA8DF] text-[48px] leading-[22px] tracking-[2.2px]">
				Recent Events
				</p>
			</div>
            <div className="w-full grid md:grid-cols-3 mt-8 items-center justify-center gap-8 gap-y-16">
				
					<div className="flex ">
						<img
							src={Gallery_img1}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
					<div className="flex ">
						<img
							src={Gallery_img2}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
					<div className="flex ">
						<img
							src={Gallery_img3}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
					<div className="flex ">
						<img
							src={Gallery_img4}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
					<div className="flex ">
						<img
							src={Gallery_img5}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
					<div className="flex ">
						<img
							src={Gallery_img6}
							alt=""
							className="h-[400px]  w-full  object-cover"
						/>
					</div>
				
				
			</div>
        </div>
    );
}

export default Gallery;
