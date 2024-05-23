import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Timeframes = () => (
  <ParentDiv>
    <BlueH2>Timeframes:</BlueH2> <BlackHr />
    <Text>
      <RedSpan> School Specific Refunds:</RedSpan>
      <br />
      <br />
      Refund Request Period:
      <br />
      Please refer to the school’s individual refund policy for specific
      timeframes.
    </Text>
    <Text>
      Processing Time:
      <br />
      The processing time for refunds will be managed by the individual school.
    </Text>
    <BlackHr />
    <Text>
      <RedSpan> App Subscription Refunds:</RedSpan>
      <br />
      <br />
      Refund Request Period:
      <br />
      Refund requests for app subscriptions must be made within 30 days of the
      billing date.
    </Text>
    <Text>
      Processing Time:
      <br />
      refunds are submitted to the customer's bank immediately and can take five
      to ten working days to appear in their account.
    </Text>
    <Text>
      In some cases, refunds may be processed as reversals, where the original
      payment disappears from the account statement and the balance reflects as
      if the charge never occurred.
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default Timeframes;
