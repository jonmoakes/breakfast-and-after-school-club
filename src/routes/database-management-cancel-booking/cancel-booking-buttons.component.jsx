import useDatabaseManagementActions from "../../hooks/get-actions-and-thunks/database-management-actions-and-thunks/use-database-management-actions";
import useHamburgerHandlerNavigate from "../../hooks/use-hamburger-handler-navigate";
import useConfirmDbManageCancelBooking from "./hooks/use-confirm-db-manage-cancel-booking";

import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueSpan, RedSpan } from "../../styles/span/span.styles";

import { databaseManagementRoute } from "../../strings/routes/routes-strings";
import { ParentDiv } from "../../styles/div/div.styles";
import useDbManageCancelBookingVariables from "./hooks/use-db-manage-cancel-booking-variables";

const CancelBookingButtons = () => {
  const {
    matchedBookingFound,
    bookingId,
    userIdOfParent,
    sessionPrice,
    sessionDate,
    typeOfSession,
    numberOfChildrenInBooking,
  } = useDbManageCancelBookingVariables();
  const { confirmDbManageCancelBooking } = useConfirmDbManageCancelBooking();
  const {
    dispatchResetDataToUpdateDocument,
    dispatchResetBookingToCancelDetails,
  } = useDatabaseManagementActions();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const resetBookingToCancelAndBookingId = () => {
    dispatchResetDataToUpdateDocument();
    dispatchResetBookingToCancelDetails();
  };

  return (
    <>
      {matchedBookingFound ? (
        <ParentDiv>
          <Text>
            the details are <BlueSpan>correct</BlueSpan>, so
          </Text>
          <YellowGreenButton
            type="button"
            onClick={() =>
              confirmDbManageCancelBooking(
                bookingId,
                userIdOfParent,
                sessionPrice,
                sessionDate,
                typeOfSession,
                numberOfChildrenInBooking
              )
            }
          >
            cancel the booking
          </YellowGreenButton>

          <BlackHr />

          <Text>
            the details are <RedSpan>incorrect</RedSpan>, so
          </Text>

          <YellowGreenButton
            type="button"
            onClick={resetBookingToCancelAndBookingId}
          >
            reset booking id
          </YellowGreenButton>

          <BlackHr />

          <Text>OR</Text>
          <Text>return to database management page</Text>
          <YellowGreenButton
            type="button"
            onClick={() => hamburgerHandlerNavigate(databaseManagementRoute)}
          >
            return
          </YellowGreenButton>
        </ParentDiv>
      ) : null}
    </>
  );
};

export default CancelBookingButtons;
