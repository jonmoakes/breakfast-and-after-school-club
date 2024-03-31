import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const CancelBookingTableHelp = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();

  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  return (
    <>
      <BlackHr />
      <BlueH2>cancelling a booking:</BlueH2>
      <Text>
        to cancel your booking, tap on the small checkbox to the left of the
        date that you want to cancel and then tap 'cancel booking'
      </Text>
      <Text>
        this will take you to a page where you can confirm the cancellation.
      </Text>
      <Text>
        once confirmed, the booking will be cancelled and the funds will be
        added back to your virtual wallet.
      </Text>
      <Text>
        please note that you can only cancel a morning session booking on the
        day up to {morningSessionClosingTime}AM latest.
      </Text>
      <Text>
        to cancel an afternoon session session booking on the same day, you need
        to cancel before {afternoonSessionClosingTime}PM latest.
      </Text>
      <Text>
        if you've booked a combined morning and afternoon session, once it is
        past {morningSessionClosingTime}AM, you wont be able to cancel the
        afternoon session.
      </Text>
      <Text>
        the button to cancel a booking wont show if the date is in the past.
      </Text>
    </>
  );
};

export default CancelBookingTableHelp;
