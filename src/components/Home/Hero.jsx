import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroSlider } from "../../Data";
import { HeroIcon1, HeroIcon2, HeroIcon3, HeroIcon4 } from "../../assets";

const Hero = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="w-full z-5 h-[110vh] relative">
			<Slider {...settings} className="custom-slider">
				{HeroSlider.map((item, index) => (
					<div
						id="Slider-Boxes"
						key={index}
						className="flex flex-row relative  w-full h-[110vh] ">
						<div
							className="w-full h-full  relative"
							style={{
								backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${item.image})`,
								backgroundSize: "cover",
								backgroundPosition: "center",
							}}>
							<img
								src={HeroIcon1}
								alt=""
								className=" bg-opacity-80 top-0 h-[213px] animate-[shakeX-slow] animate-delay-600 animate-infinite"
							/>
							<img
								src={HeroIcon2}
								alt=""
								className="absolute -right-20 overflow-hidden -z-5 -bottom-5 w-[300px] h-[400px]  animate-bounce-slow"
							/>
							<img
								src={HeroIcon3}
								alt=""
								className="bg-opacity-80 absolute left-[35px] bottom-0 w-[205px] animatecss animatecss-shakeX-slow animatecss-infinite  h-[193px] "
							/>

							<div className=" md:absolute flex flex-col w-full  z-4 -mt-6 px-6 md:px-24">
								<div className="w-full flex flex-col ">
									<div className="w-full">
										<p className="font-nunito font-extrabold text-white text-[50px] flex flex-row leading-[68px] w-full ">
											Making{" "}
											<span className="text-[#FFA415] underline">Charity</span>{" "}
											The
										</p>
									</div>
									<div>
										<p className="font-nunito font-extrabold flex flex-row text-white text-[50px] leading-[68px] animate-shakeX w-full ">
											Poor People Get
										</p>
									</div>
									<div>
										<p className="font-nunito font-extrabold flex flex-row text-white text-[50px] leading-[68px]    justify-between w-full ">
											<span>Helping Now.</span>
											<img
												src={HeroIcon4}
												alt=""
												className="p-[22px] bg-white rounded-full"
											/>
										</p>
									</div>

									<div className="flex flex-col">
										<p className="font-rubik font-normal text-white text-[18px] leading-[31.5px] tracking-[0.27px]">
											Poor can only be as strong as our people & because of team{" "}
											<br />
											have designed game changing products.
										</p>
									</div>
									<div className="flex mt-4">

                                      <button className="px-6 py-2 bg-[#FFA415] rounded-full font-nunito font-bold text-white text-[17px] leading-[29.8px] tracking-[0.25px]">Join With Us</button>
									</div>
		
								</div>
								<div></div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Hero;
