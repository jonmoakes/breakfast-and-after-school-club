import Balancer from "react-wrap-balancer";

import useBookingClosingTimesVariables from "./hooks/use-booking-closing-times-variables";

import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const UpdateMorningSessionClosingTimesInfo = () => {
  const { morningSessionClosingTime } = useBookingClosingTimesVariables();

  return (
    <>
      <BlueH2>morning session</BlueH2>

      <Text>
        <Balancer>
          the latest time a user can book or cancel a morning session is:{" "}
        </Balancer>
      </Text>
      <Text>
        <Balancer>
          <RedSpan>{morningSessionClosingTime} AM</RedSpan>
        </Balancer>
      </Text>
    </>
  );
};

export default UpdateMorningSessionClosingTimesInfo;
