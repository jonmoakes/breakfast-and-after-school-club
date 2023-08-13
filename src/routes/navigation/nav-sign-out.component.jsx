import { useSelector, useDispatch } from "react-redux";

// import useGetSignOutError from "./navigation-hooks/use-get-sign-out-error";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useIsOnline from "../../hooks/use-is-online";

import { signOutAsync } from "../../store/user/user.actions";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";
import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.slice";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import {
  confirmSignOutMessage,
  yesSignOutMessage,
  noNetworkMessage,
  redirectMessage,
} from "../../strings/strings";

const NavSignOut = () => {
  // useGetSignOutError();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { isOnline } = useIsOnline();

  const currentUser = useSelector(selectCurrentUser);
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const dispatch = useDispatch();

  const confirmResult = () => {
    dispatch(signOutAsync());
    if (showHamburgerMenu) {
      dispatch(hideHamburgerMenu());
    }
  };

  const confirmSignOut = () => {
    confirmSwal(
      confirmSignOutMessage,
      redirectMessage,
      yesSignOutMessage,
      confirmResult
    );
  };

  const showNetworkErrorSwal = () => {
    fireSwal("error", noNetworkMessage, "", 0, true, false);
  };

  return (
    <>
      {!isOnline ? (
        <NavLink onClick={showNetworkErrorSwal}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : isOnline && currentUser ? (
        <NavLink onClick={confirmSignOut}>
          <BorderLink>sign out</BorderLink>
        </NavLink>
      ) : (
        isOnline && !currentUser && null
      )}
    </>
  );
};

export default NavSignOut;
