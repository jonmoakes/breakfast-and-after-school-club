import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";

import "../styles/confirm.css";
import {
  customBlack,
  customNavy,
  customRed,
  customBlue,
} from "../styles/colors";
import {
  bookedSessionsOwnerAllBookingsRoute,
  bookedSessionsUserAllBookingsRoute,
} from "../strings/routes/routes-strings";
import {
  confirmAppOwnerViewAllBookingsMessage,
  confirmNotAppOwnerViewAllBookingsMessage,
} from "../strings/confirms/confirms-strings";

const useConfirmSwal = () => {
  const swal = withReactContent(Swal);
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmSwal = (
    title,
    textHtml,
    buttonText,
    confirmResult,
    cancelResult
  ) => {
    swal
      .fire({
        title,
        html: textHtml,
        background: customBlack,
        backdrop: customNavy,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: customBlue,
        cancelButtonColor: customRed,
        confirmButtonText: buttonText,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          confirmResult();
        } else if (result.isDismissed && cancelResult) {
          cancelResult();
        }
      });
  };

  const confirmAppOwnerViewAllBookings = () => {
    const confirmResult = () => {
      hamburgerHandlerNavigate(bookedSessionsOwnerAllBookingsRoute);
    };
    confirmSwal(confirmAppOwnerViewAllBookingsMessage, "", "ok", confirmResult);
  };

  const confirmNotAppOwnerViewAllBookings = () => {
    const confirmResult = () => {
      hamburgerHandlerNavigate(bookedSessionsUserAllBookingsRoute);
    };
    confirmSwal(
      confirmNotAppOwnerViewAllBookingsMessage,
      "",
      "ok",
      confirmResult
    );
  };

  const confirmForwardToNewRoute = (title, text, buttonText, route) => {
    swal
      .fire({
        title,
        text,
        background: customBlack,
        backdrop: customNavy,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: customBlue,
        cancelButtonColor: customRed,
        confirmButtonText: buttonText,
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          hamburgerHandlerNavigate(route);
        } else {
          return;
        }
      });
  };

  return {
    confirmSwal,
    confirmForwardToNewRoute,
    confirmAppOwnerViewAllBookings,
    confirmNotAppOwnerViewAllBookings,
  };
};
export default useConfirmSwal;
