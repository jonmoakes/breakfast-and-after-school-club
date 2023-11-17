import useFireSwal from "../../../../hooks/use-fire-swal";

import {
  mutipleChildBookingChildAlreadyBookedMessage,
  removeChildFromSelectionMessage,
  sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();

  const singleChildSessionAlreadyBookedSwal = () => {
    fireSwal(
      "error",
      sessionAlreadyBookedMessage,
      sessionAlreadyBookedInstructions,
      0,
      true,
      false
    );
  };

  const multipleChildSessionAlreadyBookedSwal = (sessionType) => {
    fireSwal(
      "error",
      mutipleChildBookingChildAlreadyBookedMessage(sessionType),
      removeChildFromSelectionMessage,
      0,
      true,
      false
    );
  };

  return {
    singleChildSessionAlreadyBookedSwal,
    multipleChildSessionAlreadyBookedSwal,
  };
};

export default useSessionAlreadyBookedSwal;
