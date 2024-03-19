import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetChildrenLogic from "../logic/use-get-children-logic";

import {
  sessionAlreadyBookedInstructions,
  sessionAlreadyBookedMessage,
} from "../../../../strings/errors/errors-strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();
  const { childrenSelectedForBooking } = useGetChildrenLogic();

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
