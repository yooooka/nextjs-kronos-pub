import { useState, useEffect } from "react";

const useWindowSize = (): boolean => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth <= 1024;
      setIsSmallScreen(isSmallScreen);
    };

    checkScreenSize(); // Run the check initially

    window.addEventListener("resize", checkScreenSize); // Run the check on window resize

    return () => {
      window.removeEventListener("resize", checkScreenSize); // Clean up the event listener
    };
  }, []);

  return isSmallScreen;
};

export default useWindowSize;
