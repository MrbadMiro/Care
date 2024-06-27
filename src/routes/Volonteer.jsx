import React from 'react';
import Banner3 from '../components/Career_s/Banner3';
import Volonteer_form from '../components/Career_s/Volonteer_form';
import useScrollToTop from './useScrollToTop';

const Volonteer = () => {
  useScrollToTop();

  return (
    <div className='flex flex-col'>
      <Banner3 />
      <Volonteer_form />
    </div>
  );
};

export default Volonteer;
