import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const RefundMethods = () => (
  <>
    <BlueH2>refund methods:</BlueH2>

    <Balancer>
      <Text>
        Refunds for app subscription fees will be issued to the original payment
        method used at the time of purchase.
      </Text>
    </Balancer>
    <BlackHr />
  </>
);

export default RefundMethods;
