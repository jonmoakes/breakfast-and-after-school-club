import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../styles/confirm.css";
import {
  customBlack,
  customNavy,
  customRed,
  customBlue,
} from "../styles/colors";

const useConfirmSwal = () => {
  const swal = withReactContent(Swal);

  const confirmSwal = (title, text, buttonText, confirmResult) => {
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
          confirmResult();
        }
      });
  };

  return { confirmSwal };
};
export default useConfirmSwal;
