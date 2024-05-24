import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const Timeframes = () => (
  <>
    <BlueH2>timeframes:</BlueH2>

    <Balancer>
      <Text>
        Refund requests for app subscriptions must be made within 30 days of the
        billing date.
      </Text>
      <Text>
        refunds are submitted to the customer's bank immediately and can take
        five to ten working days to appear in their account.
      </Text>
      <Text>
        In some cases, refunds may be processed as reversals, where the original
        payment disappears from the account statement and the balance reflects
        as if the charge never occurred.
      </Text>
    </Balancer>
    <BlackHr />
  </>
);

export default Timeframes;
