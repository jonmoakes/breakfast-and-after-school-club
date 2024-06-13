import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";

import { bookedSessionsUserAllBookingsRoute } from "../../../strings/routes/routes-strings";
import { useLocation } from "react-router-dom";

const CancelBookingTableHelp = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();

  const { morningSessionClosingTime, afternoonSessionClosingTime } =
    bookingClosingTimes || {};

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BlackHr />
      <BlueH2>cancelling a booking:</BlueH2>
      <Text>
        to cancel your booking, tap on the small checkbox to the left of the
        date that you want to cancel and then tap the orange icon with the cross
        in it that appears in the top right of the screen.
      </Text>
      <Text>
        Note that only one entry should be selected in order for this button to
        show.
      </Text>

      <Text>
        this will take you to a page where you can confirm the cancellation.
      </Text>
      <Text>
        once confirmed, the booking will be cancelled and the funds will be
        added back to your virtual wallet.
      </Text>

      {morningSessionClosingTime && afternoonSessionClosingTime ? (
        <>
          <Text>
            please note that you can only cancel a morning session booking on
            the day up to{" "}
            <RedSpan className="shadow">{morningSessionClosingTime}AM</RedSpan>{" "}
            latest.
          </Text>
          <Text>
            to cancel an afternoon session booking on the same day, you need to
            cancel before{" "}
            <RedSpan className="shadow">
              {afternoonSessionClosingTime}PM
            </RedSpan>{" "}
            latest.
          </Text>
          <Text>
            if you've booked a combined morning and afternoon session, once it
            is past{" "}
            <RedSpan className="shadow">{morningSessionClosingTime}AM</RedSpan>{" "}
            on the same day as the booking, you wont be able to cancel the
            afternoon session.
          </Text>
        </>
      ) : (
        <>
          <Text>
            you cannot cancel a booking that is on the same day as the current
            date after a specific time.
          </Text>
          <Text>
            if this time has passed, you wont see the cancel booking button.
          </Text>
        </>
      )}

      {path === bookedSessionsUserAllBookingsRoute ? (
        <Text>
          the button to cancel a booking will not show if the date of the
          booking is in the past.
        </Text>
      ) : null}
    </>
  );
};

export default CancelBookingTableHelp;
