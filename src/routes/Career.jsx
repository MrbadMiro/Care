import React from 'react'
 
import Career_form from '../components/Career_s/Career_form';
import Banner4 from '../components/Career_s/Banner4';
import useScrollToTop from './useScrollToTop';
const Career = () => {
  useScrollToTop();
  return (
    <div className='flex flex-col'>
        <Banner4/>
        <Career_form/>

    </div>
  )
}

export default Career;
