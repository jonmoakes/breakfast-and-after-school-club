import { Container } from "../../styles/container/container.styles";

import Eligibility from "./sections/eligibility.component";
import Process from "./sections/process.component";
import RefundsPolicyTitleAndIntro from "./sections/refunds-policy-title-and-intro.component";
import Timeframes from "./sections/timeframes.component";

const RefundsPolicy = () => (
  <Container>
    <RefundsPolicyTitleAndIntro />
    <Eligibility />
    {/* <Timeframes />
    <Process /> */}
  </Container>
);

export default RefundsPolicy;
