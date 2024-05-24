import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const NonRefundable = () => (
  <>
    <Balancer>
      <BlueH2>Non-Refundable Items / Services:</BlueH2>
    </Balancer>
    <Balancer>
      <Text>
        Administrative fees and late cancellation charges for app subscriptions
        are non-refundable.
      </Text>
    </Balancer>
    <BlackHr />
  </>
);

export default NonRefundable;
