import useRecurringSessionsFunctions from "../../../hooks/use-recurring-sessions-functions";
import useDuplicateBookingLogic from "./hooks/use-duplicate-booking-logic";

import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { Text } from "../../../../../styles/p/p.styles";
import { ParentDiv } from "../../../../../styles/div/div.styles";

const CheckBookingsButton = () => {
  const { checkForDuplicateBookings } = useDuplicateBookingLogic();
  const { noMorningSessions, noAfternoonSessions } =
    useRecurringSessionsFunctions();

  return (
    <ParentDiv className="bounce">
      {noMorningSessions() || noAfternoonSessions() ? null : (
        <>
          <Text>
            if these dates are correct, please tap the button below to check for
            duplicate bookings.
          </Text>
          <Text>
            if none are found, you will then see the book sessions button.
          </Text>
          <YellowGreenButton onClick={checkForDuplicateBookings}>
            check bookings
          </YellowGreenButton>
        </>
      )}
    </ParentDiv>
  );
};

export default CheckBookingsButton;
