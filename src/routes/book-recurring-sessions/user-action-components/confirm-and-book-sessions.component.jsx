import useBookRecurringSessionsVariables from "../hooks/use-book-recurring-sessions-variables";
import useRecurringSessionsFunctions from "../hooks/use-recurring-sessions-functions";
import useDispatchBookRecurringSessionsThunks from "../../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-dispatch-book-recurring-sessions-thunks";
import useConfirmSwal from "../../../hooks/use-confirm-swal";

import { YellowGreenButton } from "../../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

const ConfirmAndBookSessions = () => {
  const { walletBalance } = useGetCurrentUserSelectors();
  const { bookingData, totalCost } = useRecurringSessionsFunctions();
  const { numberOfChildrenInBooking, sessionChoice } =
    useBookRecurringSessionsVariables();

  const { confirmSwal } = useConfirmSwal();
  const { dispatchBookRecurringSessionsThunks } =
    useDispatchBookRecurringSessionsThunks();

  const confirmBookings = () => {
    const confirmResult = () => {
      const sessionPrice = totalCost();
      dispatchBookRecurringSessionsThunks(
        bookingData,
        numberOfChildrenInBooking,
        sessionChoice,
        sessionPrice
      );
    };
    confirmSwal("book these sessions?", "", "yes", confirmResult);
  };

  return (
    <>
      {walletBalance >= totalCost() ? (
        <ParentDiv className="bounce">
          <Text>
            the total cost for these bookings is:
            <br />
            <RedSpan>£{(totalCost() / 100).toFixed(2)}</RedSpan>
          </Text>
          <Text>if these dates are correct, please tap the button below.</Text>
          <Text>
            on completion of your booking, the above amount will be deducted
            from your wallet.
          </Text>
          <YellowGreenButton onClick={confirmBookings}>
            book sessions
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default ConfirmAndBookSessions;
