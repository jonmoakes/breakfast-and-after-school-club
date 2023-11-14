import useFireSwal from "../../../../hooks/use-fire-swal";
import {
  mutipleChildBookingChildAlreadyBookedMessage,
  removeChildFromSelectionMessage,
  //   sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();

  const singleChildSessionAlreadyBookedSwal = (sessionType, childName) => {
    fireSwal(
      "error",
      sessionAlreadyBookedMessage(sessionType, childName),
      "",
      0,
      true,
      false
    );
  };

  const multipleChildSessionAlreadyBookedSwal = (
    sessionType,
    matchingChildName
  ) => {
    fireSwal(
      "error",
      mutipleChildBookingChildAlreadyBookedMessage(
        sessionType,
        matchingChildName
      ),
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
