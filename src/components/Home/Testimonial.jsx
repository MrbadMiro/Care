import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
	A_1_icon,
	A_2_icon,
	Review,
	Testimonial_flower,
	Testimonial_hand,
	man1,
	man2,
} from "../../assets";
import { TestimonialData } from "../../Data";
import { FaArrowLeft } from "react-icons/fa";
const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				background: "#122F2A",
				borderRadius: "50%",
				padding: "25px",
				right: "10px",
			}}
			onClick={onClick}
		/>
	);
};

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				background: "#122F2A",
				padding: "25px",
				left: "10px",
				zIndex: 1,
			}}
			onClick={onClick}>
			{" "}
			<FaArrowLeft size={25} color="#122F2A" />
		</div>
	);
};

const Testimonial = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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
		<div className="w-full flex flex-col md:px-12 py-24 px-3 relative mt-10">
			<div className="flex w-full flex-col  relative">
            <img src={Testimonial_flower} alt="" className="absolute z-10 right-0 -bottom-20 hidden lg:flex  md:w-[93px] lg:h-[221px] object-cover animatecss animatecss-slideInDown animatecss-infinite " />
				<div className="w-full flex items-center justify-center gap-2 mb-15">
					<div className="flex  ">
						<img src={A_1_icon} alt="" />
						<img src={A_2_icon} alt="" className="animate-bounce" />
					</div>
					<p className="font-caveat text-center font-bold text-Orange text-[22px] leading-[22px] tracking-[2.2px]">
						OUR TESTIMONIALS
					</p>
				</div>
				<div className="w-full mb-12 relative z-1  ">
					<p className="font-nunito  text-center font-extrabold text-[#122F2A] mt-2 text-[40px] leading-[50px] tracking-[0.33px]">
						What They’re Saying
					</p>
                    <img src={Testimonial_hand} alt="" className=" absolute z-10 left-0 -top-10 hidden lg:flex  md:w-[139px] lg:h-[255px] object-cover shakeX" />
                    
				</div>
                
				<div className="w-full  h-fit px-24">
                  
					<Slider {...settings} className="custom-slider2">
						{TestimonialData.map((item, index) => (
							<div
								id="Slider-Boxes"
								key={index}
								className="p-4 mt-8 w-full bg-white flex flex-row border rounded-[80px] border-[#DDDDDD] py-12">
								<div className="flex flex-col px-[250px] gap-1">
									<p className="font-nunito text-center text-[24px] font-extrabold text-[#122F2A] ">
										{item.name}
									</p>
									<p className="font-rubik text-center text-[16px] font-normal mt-4 text-[#636363] ">
										{" "}
										{item.position}{" "}
									</p>
									<p className="font-rubik text-center text-[16px] font-normal mt-4 text-[#636363] ">
										{item.Description}
									</p>
									<div className="flex w-full items-center justify-center py-4">
										<img src={Review} alt="" />
									</div>
								</div>
							</div>
						))}
					</Slider>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
