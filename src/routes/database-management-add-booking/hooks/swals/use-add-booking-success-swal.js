import useConfirmSwal from "../../../../hooks/use-confirm-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import useSendEmailConfirmationThunk from "../../../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/add-booking/use-send-email-confirmation-thunk";
import useGetDatabaseManagementSelectors from "../../../../hooks/get-selectors/use-get-database-management-selectors";

import { shouldSendEmailMessage } from "../../../../strings/confirms/confirms-strings";
import { bookingSuccessfullyAddedMessage } from "../../../../strings/successes/successes-strings";
import { databaseManagementRoute } from "../../../../strings/routes/routes-strings";
import { getNumberOfChildrenInBooking } from "../../../../functions/get-number-of-children-in-booking";
import useGetSessionPrice from "../../../../hooks/use-get-session-price";

const useAddBookingSuccessSwal = () => {
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();
  const { sendEmailConfirmationThunk } = useSendEmailConfirmationThunk();
  const { date, sessionType, parentEmail, childrenInBooking } =
    useGetDatabaseManagementSelectors();

  const numberOfChildrenInBooking =
    getNumberOfChildrenInBooking(childrenInBooking);

  const { formattedSessionPrice } = useGetSessionPrice(
    sessionType,
    numberOfChildrenInBooking
  );

  const addBookingSuccessSwal = () => {
    const confirmResult = () => {
      sendEmailConfirmationThunk(
        date,
        sessionType,
        parentEmail,
        childrenInBooking,
        formattedSessionPrice
      );
    };

    const cancelResult = () => {
      hamburgerHandlerNavigate(databaseManagementRoute);
    };

    confirmSwal(
      bookingSuccessfullyAddedMessage,
      shouldSendEmailMessage,
      "send email",
      confirmResult,
      cancelResult
    );
  };

  return { addBookingSuccessSwal };
};

export default useAddBookingSuccessSwal;
