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

  return {
    isMobileDevice,
    isDesktop,
    isTinyScreen,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isLargeTablet,
  };
};

export default useIsMobileDevice;
