import useGetWindowWidth from "./use-get-window-width";

const useIsMobileMobileDevice = () => {
  const { useWindowWidth } = useGetWindowWidth();
  const { width } = useWindowWidth();

  const isMobileDevice = () => {
    return (width <= 1366 &&
      window.matchMedia("(display-mode: standalone)").matches) ||
      (width <= 1366 &&
        !window.matchMedia("(display-mode: standalone)").matches)
      ? true
      : width > 1366 && false;
  };

  return { isMobileDevice };
};

export default useIsMobileMobileDevice;
