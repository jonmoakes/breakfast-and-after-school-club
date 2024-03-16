import useFireSwal from "../../../../hooks/use-fire-swal";

import useGetBookSessionSelectors from "../../../../hooks/get-selectors/use-get-book-session-selectors";

import {
  sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/errors/errors-strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();
  const { childrenSelectedForBooking } = useGetBookSessionSelectors();

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
