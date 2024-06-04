import useFireSwal from "../../../../hooks/use-fire-swal";
import useGetChildrenLogic from "../logic/use-get-children-logic";

import { sessionAlreadyBookedMessage } from "../../../../strings/errors/errors-strings";

const useSessionAlreadyBookedSwal = () => {
  const { fireSwal } = useFireSwal();
  const { childrenSelectedForBooking } = useGetChildrenLogic();

  const sessionAlreadyBookedSwal = (sessionType) => {
    fireSwal(
      "error",
      sessionAlreadyBookedMessage(childrenSelectedForBooking, sessionType),
      "",
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
