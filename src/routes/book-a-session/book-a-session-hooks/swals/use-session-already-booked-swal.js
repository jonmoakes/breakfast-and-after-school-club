import { useSelector } from "react-redux";

import useFireSwal from "../../../../hooks/use-fire-swal";

import { selectChildrenSelectedForBooking } from "../../../../store/book-session/book-session.slice";

import {
  sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();

  const childrenSelectedForBooking = useSelector(
    selectChildrenSelectedForBooking
  );

  const sessionAlreadyBookedSwal = () => {
    fireSwal(
      "error",
      sessionAlreadyBookedMessage(childrenSelectedForBooking),
      sessionAlreadyBookedInstructions,
      0,
      true,
      false
    );
  };

  return {
    sessionAlreadyBookedSwal,
  };
};

export default useSessionAlreadyBookedSwal;
