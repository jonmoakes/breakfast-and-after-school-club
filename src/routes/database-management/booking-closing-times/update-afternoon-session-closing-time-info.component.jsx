import Balancer from "react-wrap-balancer";

import useBookingClosingTimesVariables from "./hooks/use-booking-closing-times-variables";

import UpdateBookingClosingTimesInstructions from "./update-booking-closing-times-instructions.component";

import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const UpdateAfternoonSessionClosingTimesInfo = () => {
  const { afternoonSessionClosingTime, afternoonText } =
    useBookingClosingTimesVariables();

  return (
    <>
      <BlueH2>afternoon session</BlueH2>
      <Balancer>
        <Text>
          the latest time a user can book or cancel an afternoon session is:
        </Text>
        <Text>
          <RedSpan>{afternoonSessionClosingTime} PM</RedSpan>
        </Text>
      </Balancer>

      <UpdateBookingClosingTimesInstructions sessionType={afternoonText} />

      <Text>
        for example:
        <br />
        14:30 for 2:30PM
      </Text>
    </>
  );
};

export default UpdateAfternoonSessionClosingTimesInfo;
