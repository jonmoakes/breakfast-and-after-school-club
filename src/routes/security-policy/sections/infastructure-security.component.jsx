import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import Balancer from "react-wrap-balancer";

const InfastructureSecurity = () => (
  <ParentDiv>
    <BlueH2>Infrastructure Security</BlueH2>

    <Text>
      <RedSpan>Secure Hosting:</RedSpan>
    </Text>

    <Text>
      <Balancer>
        Our app is hosted on secure servers with a leading cloud service
        provider. These providers adhere to stringent security standards and
        employ robust physical and environmental controls to protect our
        infrastructure.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>DDoS Protection:</RedSpan>
        <br />
        <br />
        Our infrastructure includes built-in DDoS protection to mitigate attacks
        that could disrupt service availability.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>Content Delivery Network (CDN):</RedSpan>
        <br />
        <br />
        We use a global CDN to distribute content closer to users, enhancing
        performance and security by reducing the attack surface.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>Continuous Deployment and Rollbacks:</RedSpan>
        <br />
        <br />
        We support continuous deployment practices, allowing for automated and
        secure updates to the app. Our deployment process is atomic, ensuring
        updates are applied completely or not at all, with instant rollbacks
        available for quick recovery if needed.
      </Balancer>
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default InfastructureSecurity;
