Page 1 --> Homepage | Slogan, MISSION, VISION, Programs, Partners |
Page 2 --> About Us | Who we are, Our Story, Our Values, Testimonials |
Page 3 --> Contact Us | Office Address, Contact Details with ,web chat , Location Map | contact us form for enquiry
Page 4 --> Services | Post Your Programs with Images |
Page 5 --> career and volunteers
Same form drop down career or volunteer

<!-- Border Style -->

border-b border-b-white border-opacity-20

<!-- Animation -->

npm install animated-tailwindcss
https://github.com/dumptyd/tailwind-animatecss/
https://dumptyd.github.io/tailwind-animatecss/
https://github.com/bentzibentz/tailwindcss-animate.css

<!-- BG Image Add  -->

const sectionStyle = {
backgroundImage: `linear-gradient(rgba(0,0,0,0.5), url(${Footer_img})`,
backgroundSize: "cover",
backgroundPosition: "center",
};


<!-- Section Style -->
<div className='w-full flex flex-col md:px-12 px-12 my-24 items-center justify-center'></div>


<!-- Text Style -->
className="font-caveat font-bold text-white text-[22px] leading-[22px] tracking-[2.2px]"

className="font-nunito font-extrabold text-white text-[22px] leading-[26.4px] tracking-[0.33px]"

font-thin font-weight: 100;
font-extralight font-weight: 200;
font-light font-weight: 300;
font-normal font-weight: 400;
font-medium font-weight: 500;
font-semibold font-weight: 600;
font-bold font-weight: 700;
font-extrabold font-weight: 800;
font-black font-weight: 900;

text-[#BCBCBC]

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
var settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 3,
slidesToScroll: 1,
initialSlide: 0,
arrows: false,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
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

<div>
<Slider {...settings} className="custom-slider">
{courses.map((item, index) => (
<div
						id="Slider-Boxes"
						key={index}
						className="p-4 shadow-lg min-w-[full] bg-white flex flex-col"></div>

    			))}
    		</Slider>
    	</div>
    );

};

export default Hero;

/_ Hero.css _/
.slick-dots {
display: flex;
flex-direction: Row;
justify-content: flex-end;
bottom: 5px;
right: 0;
}

.slick-dots li {
margin-right: 5px; /_ Optional: Add spacing between dots _/
}

.slick-dots li button {
font-size: 0; /_ Hide the dot content _/
width: 10px;
height: 10px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.5); /_ Customize dot color and opacity _/
border: none;
}

.slick-dots li.slick-active button {
background: rgba(255, 255, 255, 1); /_ Customize active dot color and opacity _/
}

<!-- .....................Absoulute Div Width......................................... -->
<div className="flex flex-col md:px-12 px-12 w-full mt-24 md:mt-0">
			<div className="grid md:grid-cols-3 relative w-full ">
				{/* 1st div */}
				<div className="relative flex items-center justify-center px-[15px] w-full">
					<img
						src={Progress_img1}
						alt=""
						className="object-cover w-full h-auto"
					/>
					<div className="Flex-col absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img
								src={Progress_icon1}
								alt=""
								className="w-8 h-8 md:w-auto md:h-auto"
							/>
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px]">
									Treatment Help
								</p>
								<p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* 2nd div */}
				<div className="relative flex items-center justify-center px-[15px] w-full">
					<img
						src={Progress_img1}
						alt=""
						className="object-cover w-full h-auto"
					/>
					<div className="absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img
								src={Progress_icon1}
								alt=""
								className="w-8 h-8 md:w-auto md:h-auto"
							/>
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px]">
									Treatment Help
								</p>
								<p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* 3rd div */}
				<div className="relative flex items-center justify-center px-[15px] w-full">
					<img
						src={Progress_img1}
						alt=""
						className="object-cover w-full h-auto"
					/>
					<div className="absolute rounded-[58px] bg-[#F1F6F7]  left-1/2 transform -translate-x-1/2 -top-10 py-4  w-[calc(100%-30px)] md:w-[calc(100%-30px)]">
						<div className="flex flex-row md:flex-row items-center gap-5 justify-center">
							<img
								src={Progress_icon1}
								alt=""
								className="w-8 h-8 md:w-auto md:h-auto"
							/>
							<div className="flex flex-col gap-[9px]">
								<p className="font-nunito font-extrabold text-[#122F2A] text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px]">
									Treatment Help
								</p>
								<p className="font-rubik font-normal text-[#636363] text-[14px] md:text-[16px] leading-[20px] md:leading-[28px]">
									No matter what have.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

<!-- .....................Absoulute Div Width......................................... -->