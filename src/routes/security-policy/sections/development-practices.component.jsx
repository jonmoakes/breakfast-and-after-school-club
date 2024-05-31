import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const DevelopmentPractices = () => (
  <ParentDiv>
    <BlueH2>
      <Balancer>secure develeopment practices</Balancer>
    </BlueH2>

    <Text>
      <RedSpan>Secure Coding:</RedSpan>
    </Text>

    <Text>
      <Balancer>
        Our development team follows secure coding practices to minimise the
        risk of common vulnerabilities, such as injection attacks, cross-site
        scripting (XSS), and security misconfigurations.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>Code Reviews:</RedSpan>
        <br />
        <br />
        All code changes undergo thorough peer review to identify and address
        potential security flaws before they are deployed to production.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>Third-Party Libraries:</RedSpan>
        <br />
        <br />
        We carefully vet and monitor third-party libraries and dependencies to
        ensure they meet our security standards and do not introduce
        vulnerabilities into our codebase.
      </Balancer>
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default DevelopmentPractices;
