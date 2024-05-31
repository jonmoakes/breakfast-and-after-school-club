import Balancer from "react-wrap-balancer";

import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";

const ChangesToPolicy = () => (
  <>
    <BlueH2>
      <Balancer>Changes to the Refunds Policy: </Balancer>
    </BlueH2>

    <Text>
      <Balancer>We may update this Refunds Policy from time to time.</Balancer>
    </Text>
    <Text>
      <Balancer>
        Please review this policy periodically for any changes.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        The date of the last update will be indicated at the top of the policy.
      </Balancer>
    </Text>
  </>
);

export default ChangesToPolicy;
