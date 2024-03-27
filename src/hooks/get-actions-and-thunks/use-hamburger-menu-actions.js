import { useDispatch } from "react-redux";

import {
  hideHamburgerMenu,
  toggleHamburgerMenu,
} from "../../store/hamburger-menu/hamburger-menu.slice";

const useHamburgerMenuActions = () => {
  const dispatch = useDispatch();

  const dispatchHideHamburgerMenu = () => {
    dispatch(hideHamburgerMenu());
  };

  const dispatchToggleHamburgerMenu = () => {
    dispatch(toggleHamburgerMenu());
  };

  return { dispatchHideHamburgerMenu, dispatchToggleHamburgerMenu };
};

export default useHamburgerMenuActions;
