import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { selectShowHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.selector";
import { hideHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.slice";
import useIsRouteWithNavWarning from "./use-is-route-with-nav-warning";

const useHamburgerHandlerNavigate = () => {
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();

  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const hamburgerHandlerNavigate = (url) => {
    if (showHamburgerMenu && isRouteWithNavWarning()) {
      dispatch(hideHamburgerMenu());
      navigate(url, {
        state: location.pathname,
      });
    } else if (showHamburgerMenu && !isRouteWithNavWarning()) {
      dispatch(hideHamburgerMenu());
      navigate(url);
    } else if (!showHamburgerMenu) {
      navigate(url);
    }
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
