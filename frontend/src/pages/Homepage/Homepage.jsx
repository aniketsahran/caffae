import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LeftDesc from '../../components/LeftDesc/LeftDesc';
import RightDesc from '../../components/RightDesc/RightDesc';



const Homepage = () => {
  return (
    <>
        <Header />
        <RightDesc />
        <LeftDesc />
        <RightDesc />
        <LeftDesc />
        <Footer />
    </>
  )
}

export default Homepage;