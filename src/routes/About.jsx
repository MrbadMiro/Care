import React from "react";
import Banner from "../components/About_c/Banner";
import Whoweare from "../components/About_c/Whoweare";
import Ourstory from "../components/About_c/Ourstory";
import Ourvalue from "../components/About_c/Ourvalue";
import Testimonial from "../components/Home/Testimonial"
const About = () => {
	return(
          <div className="w-full h-full flex flex-col">
		  <Banner/>
		  <Whoweare/>
		  <Ourstory/>
		  <Ourvalue/>
		  <Testimonial/>
		  </div>
	)
	  

};

export default About;
