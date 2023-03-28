import React, { useEffect, useState } from "react";
import HeaderMobile from "../HeaderMobile/HeaderMobile";
import Header from "../Header/Header";

const HeaderLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <>{isMobile ? <HeaderMobile /> : <Header />}</>;
};

export default HeaderLayout;
