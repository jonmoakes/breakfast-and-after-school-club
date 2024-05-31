import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const NonRefundable = () => (
  <>
    <BlueH2>
      <Balancer>Non-Refundable Items / Services: </Balancer>
    </BlueH2>

    <Text>
      <Balancer>
        Administrative fees and late cancellation charges for app subscriptions
        are non-refundable.
      </Balancer>
    </Text>

    <BlackHr />
  </>
);

export default NonRefundable;
