import { useEffect, useState } from "react";
import DatesBlock from "./components/DatesBlock";
import MobileDatesBlock from "./components/MobileDatesBlock";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile ? <MobileDatesBlock /> 
    : <>
        {/* FOR ADDING DatesBlock: The DatesBlock component must have a unique paginationClass for the animation to work correctly  */}
        {/* <DatesBlock paginationClass="pagination-2"/> */}

        <DatesBlock paginationClass="pagination-1"/>
      </>
  );
}
