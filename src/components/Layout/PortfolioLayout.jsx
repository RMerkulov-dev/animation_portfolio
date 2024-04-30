import React, { useEffect, useState } from 'react';
import SliderMobile from '../SliderMobile/SliderMobile';
import PortfolioDescktop from '../PortfolioDescktop/PortfolioDescktop';

const PortfolioLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <SliderMobile openModal={openModal} setOpenModal={setOpenModal} />
      ) : (
        <PortfolioDescktop />
      )}
    </>
  );
};

export default PortfolioLayout;
