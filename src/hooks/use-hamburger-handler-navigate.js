import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectShowHamburgerMenu } from "../store/hamburger-menu/hamburger-menu.selector";

const useHamburgerHandlerNavigate = () => {
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const navigate = useNavigate();

  const hamburgerHandlerNavigate = (url) => {
    if (!showHamburgerMenu) {
      navigate(url);
    } else {
      return;
    }
  };

  return { hamburgerHandlerNavigate };
};

export default useHamburgerHandlerNavigate;
