import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import DescSection from '../../components/DescSection/DescSection';
import Community from '../../components/Community/Community';

const Homepage = () => {
  return (
    <>
        <Header />
        <DescSection />
        <Community />
        <Footer />
    </>
  )
}

export default Homepage;