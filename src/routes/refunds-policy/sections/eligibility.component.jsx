import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const Eligibility = () => (
  <>
    <BlueH2>eligibility:</BlueH2>

    <Text>
      <Balancer>
        Refund requests for app subscription fees will be considered on a case
        by case basis, typically in situations where the service was not
        delivered as agreed.{" "}
      </Balancer>
    </Text>

    <BlackHr />
  </>
);

export default Eligibility;
