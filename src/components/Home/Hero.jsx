// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { HeroSlider } from "../../Data";
// import { HeroIcon1, HeroIcon2, HeroIcon3, HeroIcon4 } from "../../assets";

// const Hero = () => {
// 	var settings = {
// 		dots: true,
// 		infinite: true,

// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		initialSlide: 0,
// 		arrows: false,
// 		autoplay: true,
// 		speed: 500,
// 		autoplaySpeed: 3000,
// 		cssEase: "linear",
// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 					infinite: true,
// 					dots: true,
// 				},
// 			},
// 			{
// 				breakpoint: 820,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 					initialSlide: 1,
// 				},
// 			},
// 			{
// 				breakpoint: 480,
// 				settings: {
// 					slidesToShow: 1,
// 					slidesToScroll: 1,
// 				},
// 			},
// 		],
// 	};
// 	return (
// 		<div className="w-full z-5 h-[110vh] relative">
// 			<Slider {...settings} className="custom-slider">
// 				{HeroSlider.map((item, index) => (
// 					<div
// 						id="Slider-Boxes"
// 						key={index}
// 						className="flex flex-row relative  w-full h-[110vh] ">
// 						<div
// 							className="w-full h-full  relative"
// 							style={{
// 								backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${item.image})`,
// 								backgroundSize: "cover",
// 								backgroundPosition: "center",
// 							}}>
// 							<img
// 								src={HeroIcon1}
// 								alt=""
// 								className=" bg-opacity-80 top-0 h-[213px] animate-[shakeX-slow] animate-delay-600 animate-infinite"
// 							/>
// 							<img
// 								src={HeroIcon2}
// 								alt=""
// 								className="absolute -right-20 overflow-hidden -z-8 -bottom-5 w-[300px] h-[400px]  animate-bounce-slow"
// 							/>
// 							<img
// 								src={HeroIcon3}
// 								alt=""
// 								className="bg-opacity-80 absolute left-[35px] bottom-0 w-[205px] animatecss animatecss-shakeX-slow animatecss-infinite  h-[193px] "
// 							/>

// 							<div className=" md:absolute flex flex-col w-full  z-4 -mt-6 px-6 md:px-24">
// 								<div className="w-full flex flex-col ">
// 									<div className="w-full">
// 										<p className="font-nunito font-extrabold text-white text-[50px] flex flex-row leading-[68px] w-full ">
// 											Making{" "}
// 											<span className="text-[#FFA415] underline">Charity</span>{" "}
// 											The
// 										</p>
// 									</div>
// 									<div>
// 										<p className="font-nunito font-extrabold flex flex-row text-white text-[50px] leading-[68px] animate-shakeX w-full ">
// 											Poor People Get
// 										</p>
// 									</div>
// 									<div>
// 										<p className="font-nunito font-extrabold flex flex-row text-white text-[50px] leading-[68px]    justify-between w-full ">
// 											<span>Helping Now.</span>
// 											<img
// 												src={HeroIcon4}
// 												alt=""
// 												className="p-[22px] bg-white rounded-full"
// 											/>
// 										</p>
// 									</div>

// 									<div className="flex flex-col">
// 										<p className="font-rubik font-normal text-white text-[18px] leading-[31.5px] tracking-[0.27px]">
// 											Poor can only be as strong as our people & because of team{" "}
// 											<br />
// 											have designed game changing products.
// 										</p>
// 									</div>
// 									<div className="flex mt-4">
// 										<button class="join-button relative px-6 py-2 bg-[#FFA415] rounded-full font-nunito font-bold text-white text-[17px] leading-[29.8px] tracking-[0.25px] overflow-hidden">
// 											<span class="relative z-10">Join With Us</span>
// 										</button>
// 									</div>
// 								</div>
// 								<div></div>
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</Slider>
// 		</div>
// 	);
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { HeroIcon1, HeroIcon2, HeroIcon3, HeroIcon4 } from "../../assets";
import { HeroSlider } from "../../Data";

const Hero = () => {
	const [index, setIndex] = useState(0);

	const nextSlide = () => {
		setIndex((prevIndex) => (prevIndex + 1) % HeroSlider.length);
	};

	const prevSlide = () => {
		setIndex(
			(prevIndex) => (prevIndex - 1 + HeroSlider.length) % HeroSlider.length
		);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 10000);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className="w-full  relative h-[110vh]  flex  ">
			{HeroSlider.map((item, i) => (
				<div
					key={i}
					className={`slide-container ${
						i === index ? "block" : "hidden"
					} flex w-full  `}>
					<div className="w-full h-[110vh]  relative overflow-hidden  flex  items-center">
						<img
							
							alt=""
							className=" -z-10 h-full  w-full absolute zoom-in"
							style={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${item.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}
						/>
						{/*Absolute icons */}
						<img
							src={item.icon1}
							alt=""
							className="hidden md:flex  absolute  bg-opacity-80 top-0 -left-20 h-[213px] animate-bounce-horizontal"
						/>
						<img
							src={item.icon2}
							alt=""
							className="hidden md:flex  absolute -right-20 overflow-hidden -z-8 -bottom-8 w-[300px] h-[400px]  animate-bounce-slow"
						/>
						<img
							src={item.icon3}
							alt=""
							className="hidden md:flex absolute bg-opacity-80  left-[35px] bottom-0 w-[205px] animate-wiperAnimation "
						/>
						{/*Absolute icons */}

						<div className=" flex flex-col w-full my-[200px]  z-4  px-6 md:px-12">
							<div className="w-full flex flex-col  ">
								<div   className="w-full animate-slideContent2">
									<p className="font-nunito font-extrabold text-white text-[30px] leading-[40px] md:text-[50px] flex flex-row md:leading-[68px] w-full ">
									Building Prosperity & Community: 
										{/* <span className="text-[#FFA415]  underline mx-4">Charity</span>{" "}
										The */}
									</p>
								</div>
								{/* <div>
									<p className="font-nunito font-extrabold animate-slideContent2 flex flex-row text-white text-[30px] leading-[40px] md:text-[50px] md:leading-[68px] animate-shakeX w-full ">
									The Mangatha Pvt Ltd Way
									</p>
								</div> */}
								<div>
									<p className="font-nunito font-extrabold animate-slideContent2 flex flex-row text-white  text-[30px] leading-[40px] md:text-[50px] md:leading-[68px] items-center   justify-between w-full ">
										<span>The Mangatha Pvt Ltd Way</span>
										<img
											src={HeroIcon4}
											alt=""
											className="p-[22px] hidden md:flex bg-white rounded-full animate-smoothPing"
										/>
									</p>
								</div>

								<div className="flex flex-col animate-slideContent mt-4">
									<p className="font-rubik font-normal text-white md:text-[18px] text-[16px] md:leading-[31.5px] leading-[28px] tracking-[0.27px]">
									Empowering Valvetithurai through Unified Investments and Leadership
									</p>
								</div>
								<div className="flex mt-6">
									<button class="join-button animate-slideImage2  relative px-6 py-2 bg-[#FFA415] rounded-full font-nunito font-bold text-white text-[17px] leading-[29.8px] tracking-[0.25px] overflow-hidden">
										<span class="relative z-10">Join With Us</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Hero;

{
	/* right Side */
}
{
	/* <div className="     h-full w-full flex items-center justify-center relative  ">
<div className="flex bottom-0 h-full  ">
	<img
		src={slide.imgSrc}
		alt=""
		className="h-[500px] md:h-[100vh]   z-10  object-cover w-[100%] bottom-0  animate-slideImage    "
	/>
</div>
<div className="absolute flex flex-col w-full items-center  justify-center left-1/2 transform -translate-x-1/2 bottom-0">
	<img
		src={Hero_icon2}
		alt=""
		className=" drop-shadow-2xl animate-slideImage2"
	/>
</div>
<div className="absolute flex flex-col w-full items-center overflow-hidden justify-center left-1/2 transform -translate-x-1/2 bottom-0">
	<img
		src={Hero_icon1}
		alt=""
		className="animate-slideImage3 overflow-hidden"
	/>
</div>
</div> */
}
