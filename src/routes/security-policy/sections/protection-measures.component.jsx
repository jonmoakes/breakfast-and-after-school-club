import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const ProtectionMeasures = () => (
  <ParentDiv>
    <BlueH2>Data Protection Measures</BlueH2>
    <Text>
      <RedSpan>encryption:</RedSpan>
      <br />
      <br />
      We use industry-standard encryption protocols (such as TLS) to protect
      data transmitted between your device and our servers.
    </Text>
    <BlackHr />
    <Text>
      <RedSpan>Access Controls:</RedSpan>
      <br />
      <br />
      Access to user data is strictly controlled and limited to authorised
      personnel only. We implement role-based access controls (RBAC) to ensure
      that access is granted on a need-to-know basis.
    </Text>
    <BlackHr />
    <Text>
      <RedSpan>Data Minimisation:</RedSpan>
      <br />
      <br />
      We collect and retain only the data necessary for the operation of our app
      and the provision of our services. Personal information is anonymised or
      pseudonymised whenever possible.
    </Text>
    <BlackHr />
    <Text>
      <RedSpan>Regular Audits:</RedSpan>
      <br />
      <br />
      We conduct regular security audits and assessments to identify and address
      potential vulnerabilities in our systems and infrastructure.
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default ProtectionMeasures;
