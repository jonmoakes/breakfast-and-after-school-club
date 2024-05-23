import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const Eligibility = () => (
  <ParentDiv>
    <BlueH2>eligibility for refunds:</BlueH2> <BlackHr />
    <Text>
      <RedSpan> School Specific Refunds:</RedSpan>
      <br />
      <br />
      Refunds for session bookings and virtual wallet top-ups are managed by the
      individual schools that operate the breakfast and after school clubs.
    </Text>
    <Text>
      Conditions for Refunds: Each school has its own refund policy. Please
      refer to the specific refund policy provided by the school your child is
      enrolled in for details on eligibility and conditions.
    </Text>
    <BlackHr />
    <Text>
      <RedSpan> App Subscription Refunds:</RedSpan>
      <br />
      <br />
      This section applies to refunds for monthly or yearly subscription fees
      paid to brekfast and after school club by the schools for using the app.
    </Text>
    <Text>
      Refund requests for app subscription fees will be considered on a case by
      case basis, typically in situations where the service was not delivered as
      agreed.
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default Eligibility;
