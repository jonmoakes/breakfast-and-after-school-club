import useGetWindowWidth from "./use-get-window-width";

const useIsMobileDevice = () => {
  const { useWindowWidth } = useGetWindowWidth();
  const { width } = useWindowWidth();

  const isMobileDevice = () => {
    if (
      width <= 1366 &&
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isDesktop = () => {
    if (width > 1366) {
      return true;
    } else {
      return false;
    }
  };

  const isTinyScreen = () => {
    if (width <= 300) {
      return true;
    } else {
      return false;
    }
  };

  const isSmallScreen = () => {
    if (width > 300 && width <= 379) {
      return true;
    } else {
      return false;
    }
  };

  const isMediumScreen = () => {
    if (width > 379 && width <= 539) {
      return true;
    } else {
      return false;
    }
  };

  const isLargeScreen = () => {
    if (width > 539 && width <= 767) {
      return true;
    } else {
      return false;
    }
  };

  const isLargeTablet = () => {
    if (width > 767 && width <= 1365) {
      return true;
    } else {
      return false;
    }
  };

  const getImacImageSizeBasedOnScreen = () => {
    if (isTinyScreen()) return { width: 280, height: 210 };
    if (isSmallScreen()) return { width: 320, height: 240 };
    if (isMediumScreen()) return { width: 360, height: 270 };
    if (isLargeScreen()) return { width: 530, height: 398 };
    if (isLargeTablet()) return { width: 600, height: 450 };
    if (isDesktop()) return { width: 1000, height: 750 };
    return null;
  };

  const getPhoneImageSizeBasedOnScreen = () => {
    if (isTinyScreen()) return { width: 270, height: 300 };
    if (isSmallScreen()) return { width: 320, height: 350 };
    if (isMediumScreen()) return { width: 420, height: 400 };
    if (isLargeScreen()) return { width: 450, height: 430 };
    if (isLargeTablet()) return { width: 450, height: 420 };
    if (isDesktop()) return { width: 750, height: 800 };
    return null;
  };

  return {
    isMobileDevice,
    isDesktop,
    getImacImageSizeBasedOnScreen,
    getPhoneImageSizeBasedOnScreen,
  };
};

export default useIsMobileDevice;
