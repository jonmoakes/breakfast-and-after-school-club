import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useResetStateAndNavigate from "../return-logic-and-reset-state/use-reset-state-and-navigate";

import { selectUpdateSessionDoc } from "../../../../store/book-session/book-session.selector";

import {
  bookSessionRoute,
  updateSessionDocErrorMessage,
} from "../../../../strings/strings";

const useUpdateSessionDocErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { resetStateAndNavigate } = useResetStateAndNavigate();

  const updateSessionDoc = useSelector(selectUpdateSessionDoc);
  const updateSessionError = updateSessionDoc.error;

  const updateSessionDocErrorSwal = () => {
    fireSwal(
      "error",
      updateSessionDocErrorMessage,
      `"${updateSessionError}"`,
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        resetStateAndNavigate(bookSessionRoute);
      }
    });
  };

  return { updateSessionDocErrorSwal };
};

export default useUpdateSessionDocErrorSwal;
