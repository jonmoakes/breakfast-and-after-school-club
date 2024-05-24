import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const NonRefundable = () => (
  <>
    <BlueH2>partial refunds:</BlueH2>

    <Balancer>
      <Text>
        Partial refunds for app subscriptions may be issued based on the length
        of service used and the circumstances of the refund request.
      </Text>
    </Balancer>
    <BlackHr />
  </>
);

export default NonRefundable;
