import { useDispatch, useSelector } from "react-redux";

import { toggleHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.slice";
import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";

import { HamburgerContainer, Hamburger } from "../../styles/div/div.styles";
import {
  HamburgerSpan,
  HamburgerSpanCloseMenu,
} from "../../styles/span/span.styles";

const NavHamburger = () => {
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);
  const dispatch = useDispatch();

  return (
    <>
      <HamburgerContainer>
        <Hamburger
          onClick={() => dispatch(toggleHamburgerMenu(!showHamburgerMenu))}
        >
          {!showHamburgerMenu ? (
            <>
              <HamburgerSpan />
              <HamburgerSpan />
              <HamburgerSpan />
            </>
          ) : (
            <>
              <HamburgerSpanCloseMenu />
              <HamburgerSpanCloseMenu />
              <HamburgerSpanCloseMenu />
            </>
          )}
        </Hamburger>
      </HamburgerContainer>
    </>
  );
};

export default NavHamburger;
