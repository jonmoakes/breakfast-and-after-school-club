import useGetHamburgerMenuSelectors from "../../hooks/get-selectors/use-get-hamburger-menu-selectors";
import useHamburgerMenuActions from "../../hooks/get-actions-and-thunks/use-hamburger-menu-actions";

import { HamburgerContainer, Hamburger } from "../../styles/div/div.styles";
import {
  HamburgerSpan,
  HamburgerSpanCloseMenu,
} from "../../styles/span/span.styles";

const NavHamburger = () => {
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { dispatchToggleHamburgerMenu } = useHamburgerMenuActions();

  return (
    <>
      <HamburgerContainer>
        <Hamburger onClick={() => dispatchToggleHamburgerMenu()}>
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
