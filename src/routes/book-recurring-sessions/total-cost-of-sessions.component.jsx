import useDispatchBookRecurringSessionsThunks from "../../hooks/get-actions-and-thunks/book-recurring-sessions-actions-thunks/use-dispatch-book-recurring-sessions-thunks";
import useGetCurrentMonthDateDataThunk from "../../hooks/get-actions-and-thunks/request-date-data-actions-and-thunks/use-get-current-month-date-data-thunk";
import useConfirmSwal from "../../hooks/use-confirm-swal";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const TotalCostOfSessions = ({
  calculateCostOfSessionsUserWantsToBook,
  sessionChoice,
  numberOfChildrenInBooking,
  bookingData,
}) => {
  const { getCurrentMonthDateDataThunk } = useGetCurrentMonthDateDataThunk();
  const { dispatchBookRecurringSessionsThunks } =
    useDispatchBookRecurringSessionsThunks();
  const { confirmSwal } = useConfirmSwal();

  const sessionPrice = calculateCostOfSessionsUserWantsToBook();

  const confirmBookings = () => {
    const confirmResult = () => {
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
      {sessionPrice === 0 ? (
        <ParentDiv>
          <Text>
            the day and session type choice you have selected does not contain
            any dates with spaces available.
          </Text>
          <Text>please check back often in case of cancellations!</Text>
          <Text>
            you can change your choice of date or session by tapping the buttons
            above, or tap the button below to fetch the latest data.
          </Text>
          <Text>
            if any spaces have become available, this section will change to
            show you the available dates that are on your selected day and
            session.
          </Text>
          <YellowGreenButton onClick={getCurrentMonthDateDataThunk}>
            refresh
          </YellowGreenButton>
        </ParentDiv>
      ) : (
        <ParentDiv className="bounce">
          <Text>
            the total cost for these bookings is:
            <br />
            <RedSpan>£{(sessionPrice / 100).toFixed(2)}</RedSpan>
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
      )}
    </>
  );
};

export default TotalCostOfSessions;
