import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const Timeframes = () => (
  <>
    <BlueH2>timeframes:</BlueH2>

    <Text>
      {" "}
      <Balancer>
        Refund requests for app subscriptions must be made within 30 days of the
        billing date.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        refunds are submitted to the customer's bank immediately and can take
        five to ten working days to appear in their account.
      </Balancer>
    </Text>
    <Text>
      <Balancer>
        In some cases, refunds may be processed as reversals, where the original
        payment disappears from the account statement and the balance reflects
        as if the charge never occurred.
      </Balancer>
    </Text>

    <BlackHr />
  </>
);

export default Timeframes;
