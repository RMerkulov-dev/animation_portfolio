import React, { useEffect, useState } from 'react';
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
      <PortfolioDescktop />
    </>
  );
};

export default PortfolioLayout;
