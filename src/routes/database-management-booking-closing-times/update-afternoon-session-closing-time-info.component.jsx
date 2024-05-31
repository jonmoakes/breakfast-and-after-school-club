import Balancer from "react-wrap-balancer";

import useBookingClosingTimesVariables from "./hooks/use-booking-closing-times-variables";

import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";

const UpdateAfternoonSessionClosingTimesInfo = () => {
  const { afternoonSessionClosingTime } = useBookingClosingTimesVariables();

  return (
    <>
      <BlueH2>afternoon session</BlueH2>

      <Text>
        <Balancer>
          the latest time a user can book or cancel an afternoon session is:
        </Balancer>
      </Text>
      <Text>
        <Balancer>
          <RedSpan>{afternoonSessionClosingTime} PM</RedSpan>
        </Balancer>
      </Text>
    </>
  );
};

export default UpdateAfternoonSessionClosingTimesInfo;
