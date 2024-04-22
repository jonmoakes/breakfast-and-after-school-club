import Balancer from "react-wrap-balancer";

import useGetRequestDateDataSelectors from "../../../hooks/get-selectors/use-get-request-date-data-selectors";

import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const UpdateMorningSessionClosingTimesInfo = () => {
  const { bookingClosingTimes } = useGetRequestDateDataSelectors();
  const { morningSessionClosingTime } = bookingClosingTimes || {};

  return (
    <>
      <Balancer>
        <Text>
          the latest time a user can book or cancel a morning session is:
        </Text>
        <Text>
          <RedSpan>{morningSessionClosingTime} AM</RedSpan>
        </Text>
      </Balancer>

      <BlackHr />
      <Text>
        to update this value in the database, enter in the new morning session
        closing time in the input below and then tap the 'upload new time'
        button when it appears.
      </Text>
      <Text>
        this wil set the new latest time that a user is allowed to book or
        cancel a session (for bookings on the current date ).
      </Text>
      <Text>
        please enter in the following format:
        <br />
        <RedSpan>
          HH:<LowercasedSpan>mm</LowercasedSpan>
        </RedSpan>
      </Text>
      <Text>
        for example:
        <br />
        07:00 for 7AM
      </Text>
    </>
  );
};

export default UpdateMorningSessionClosingTimesInfo;
