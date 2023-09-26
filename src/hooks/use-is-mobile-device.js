import useGetWindowWidth from "./use-get-window-width";

const useIsMobileMobileDevice = () => {
  const { useWindowWidth } = useGetWindowWidth();
  const { width } = useWindowWidth();

  const isMobileDevice = () => {
    if (
      width <= 1366 &&
      !window.matchMedia("(display-mode: standalone)").matches
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isPwa = () => {
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

  return { isMobileDevice, isPwa, isDesktop };
};

export default useIsMobileMobileDevice;
