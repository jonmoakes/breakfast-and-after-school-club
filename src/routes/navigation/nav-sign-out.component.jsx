import { useSelector, useDispatch } from "react-redux";
import { account } from "../../utils/appwrite/appwrite-config";

import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useIsOnline from "../../hooks/use-is-online";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setCurrentUser } from "../../store/user/user.slice";
import { selectShowHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.selector";
import { hideHamburgerMenu } from "../../store/hamburger-menu/hamburger-menu.slice";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import {
  confirmSignOutMessage,
  yesSignOutMessage,
  signOutSuccessMessage,
  noNetworkMessage,
} from "../../strings/strings";

const NavSignOut = () => {
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { isOnline } = useIsOnline();

  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const showHamburgerMenu = useSelector(selectShowHamburgerMenu);

  const confirmResult = async () => {
    try {
      await account.deleteSession("current");
      dispatch(setCurrentUser(null));
      fireSwal("success", signOutSuccessMessage, "", 2000, false, true);
      if (showHamburgerMenu) {
        dispatch(hideHamburgerMenu());
      }
    } catch (error) {
      fireSwal("error", error, error.message, 2000, true, false);
    }
  };

  const confirmSignOut = () => {
    confirmSwal(confirmSignOutMessage, "", yesSignOutMessage, confirmResult);
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
      ) : isOnline && !currentUser ? null : null}
    </>
  );
};

export default NavSignOut;
