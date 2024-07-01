import React from "react";
import Banner from "../components/About_c/Banner";
import Whoweare from "../components/About_c/Whoweare";
import Ourstory from "../components/About_c/Ourstory";
import Team from "../components/About_c/Team";
import Gallery from "../components/About_c/Gallery";
import Ourvalue from "../components/About_c/Ourvalue";
import Testimonial from "../components/Home/Testimonial"
import useScrollToTop from './useScrollToTop';
const About = () => {
	useScrollToTop();
	return(
          <div className="w-full h-full flex flex-col">
		  <Banner/>
		  <Whoweare/>
		  <Team/>
		  <Ourstory/>
		  <Gallery/>	
		  {/* <Ourvalue/> */}
		  {/* <Testimonial/> */}
		  </div>
	)
	  

};

export default About;
