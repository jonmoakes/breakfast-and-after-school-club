import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useFireSwal from "../../use-fire-swal";
import useResetAllStoreOnSignOut from "../../use-reset-all-store-on-sign-out";
import useGetHamburgerMenuSelectors from "../../get-selectors/use-get-hamburger-menu-selectors";
import useHamburgerMenuActions from "../use-hamburger-menu-actions";
import useHamburgerHandlerNavigate from "../../use-hamburger-handler-navigate";

import { signOutAsync } from "../../../store/user/user.thunks";

import { successMessage } from "../../../strings/successes/successes-strings";
import {
  errorReceivedMessage,
  errorSigningOutMessage,
} from "../../../strings/errors/errors-strings";
import { signInRoute } from "../../../strings/routes/routes-strings";

const useSignOutSubmitThunk = () => {
  const { fireSwal } = useFireSwal();
  const { showHamburgerMenu } = useGetHamburgerMenuSelectors();
  const { dispatchHideHamburgerMenu } = useHamburgerMenuActions();
  const { resetAllStoreOnSignOut } = useResetAllStoreOnSignOut();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutSubmitThunk = () => {
    dispatch(signOutAsync()).then((resultAction) => {
      if (signOutAsync.fulfilled.match(resultAction)) {
        hamburgerHandlerNavigate(signInRoute);
        fireSwal("success", successMessage, "", 2000, false, true);
        resetAllStoreOnSignOut();
        if (showHamburgerMenu) {
          dispatchHideHamburgerMenu();
        }
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

  const signOutSoCanSignInWithNewPasswordThunk = () => {
    dispatch(signOutAsync());
    navigate(signInRoute);
    resetAllStoreOnSignOut();
  };

  return { signOutSubmitThunk, signOutSoCanSignInWithNewPasswordThunk };
};

export default useSignOutSubmitThunk;
