import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import useIsRouteWithNavWarning from "./use-is-route-with-nav-warning";

import { selectShowHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.selector";
import { hideHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.slice";
import useResetStore from "./use-reset-store";

const useHamburgerHandlerNavigate = () => {
  const { isRouteWithNavWarning } = useIsRouteWithNavWarning();
  const { resetStore } = useResetStore();

  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const hamburgerHandlerNavigate = (url) => {
    if (showHamburgerMenu && isRouteWithNavWarning()) {
      dispatch(hideHamburgerMenu());
      navigate(url, {
        state: path,
      });
    } else if (showHamburgerMenu && !isRouteWithNavWarning()) {
      dispatch(hideHamburgerMenu());
      navigate(url);
    } else if (!showHamburgerMenu) {
      navigate(url);
    }
    resetStore();
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
