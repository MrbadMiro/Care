import React from 'react'
import Footer from '../components/Footer'
import Banner2 from '../components/Contact_s/Banner2'
import Contact_form from '../components/Contact_s/Contact_form'
import useScrollToTop from './useScrollToTop';
const Contact = () => {
  useScrollToTop();
  return (
    <div>
         <Banner2/>
         <Contact_form/>
    </div>
  )
}

export default Contact;