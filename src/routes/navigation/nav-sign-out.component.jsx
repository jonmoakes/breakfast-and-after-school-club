import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";
import useGetHamburgerMenuSelectors from "../../hooks/get-selectors/use-get-hamburger-menu-selectors";
import useHamburgerMenuActions from "../../hooks/get-actions-and-thunks/use-hamburger-menu-actions";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import useFireSwal from "../../hooks/use-fire-swal";
import useIsOnline from "../../hooks/use-is-online";
import useResetAllStoreOnSignOut from "../../hooks/use-reset-all-store-on-sign-out";

import { signOutAsync } from "../../store/user/user.thunks";

import { NavLink } from "../../styles/p/p.styles";
import { BorderLink } from "../../styles/span/span.styles";

import {
  noNetworkMessage,
  errorReceivedMessage,
  errorSigningOutMessage,
} from "../../strings/errors/errors-strings";
import { successMessage } from "../../strings/successes/successes-strings";
import {
  redirectMessage,
  confirmSignOutMessage,
  yesSignOutMessage,
} from "../../strings/confirms/confirms-strings";

const NavSignOut = () => {
  const { currentUser } = useGetCurrentUserSelectors();
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { dispatchHideHamburgerMenu } = useHamburgerMenuActions();
  const { confirmSwal } = useConfirmSwal();
  const { fireSwal } = useFireSwal();
  const { isOnline } = useIsOnline();
  const { resetAllStoreOnSignOut } = useResetAllStoreOnSignOut();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmResult = () => {
    dispatch(signOutAsync()).then((resultAction) => {
      if (signOutAsync.fulfilled.match(resultAction)) {
        fireSwal("success", successMessage, "", 2000, false, true);
        resetAllStoreOnSignOut();
        if (showHamburgerMenu) {
          dispatchHideHamburgerMenu();
        }
        navigate("/");
      } else if (signOutAsync.rejected.match(resultAction)) {
        if (resultAction.error.message === "Rejected") {
          const error = resultAction.payload;
          fireSwal(
            "error",
            errorSigningOutMessage,
            errorReceivedMessage(error),
            0,
            true,
            false
          ).then((isConfirmed) => {
            if (isConfirmed) {
              window.location.reload();
            }
          });
        }
      }
    });
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
