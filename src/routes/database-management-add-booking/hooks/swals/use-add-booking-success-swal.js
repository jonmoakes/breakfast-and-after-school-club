import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";
import { bookingSuccessfullyAddedMessage } from "../../../../strings/successes/successes-strings";

const useAddBookingSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const addBookingSuccessSwal = () => {
    fireSwal(
      "success",
      bookingSuccessfullyAddedMessage,
      "",
      0,
      true,
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(databaseManagementRoute);
      }
    });
  };

  return { addBookingSuccessSwal };
};

export default useAddBookingSuccessSwal;
