import useDuplicateBookingLogic from "./hooks/use-duplicate-booking-logic";

import { YellowGreenButton } from "../../../../../styles/buttons/buttons.styles";
import { Text } from "../../../../../styles/p/p.styles";

const CheckBookingsButton = () => {
  const { checkForDuplicateBookings } = useDuplicateBookingLogic();

  return (
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
  );
};

export default CheckBookingsButton;
