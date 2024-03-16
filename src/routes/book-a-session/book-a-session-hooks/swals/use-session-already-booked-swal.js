import useFireSwal from "../../../../hooks/use-fire-swal";

import useSelectBookSessionSelectors from "../select-book-session-selectors/use-select-book-session-selectors";

import {
  sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/errors/errors-strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();
  const { childrenSelectedForBooking } = useSelectBookSessionSelectors();

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
