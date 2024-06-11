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
import { allBookingsRoute } from "../strings/routes/routes-strings";
import { confirmViewAllBookingsMessage } from "../strings/confirms/confirms-strings";

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

  const confirmViewAllBookings = () => {
    const confirmResult = () => {
      hamburgerHandlerNavigate(allBookingsRoute);
    };
    confirmSwal(confirmViewAllBookingsMessage, "", "ok", confirmResult);
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

  return { confirmSwal, confirmForwardToNewRoute, confirmViewAllBookings };
};
export default useConfirmSwal;
