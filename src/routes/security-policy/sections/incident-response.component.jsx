import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const IncidentResponse = () => (
  <ParentDiv>
    <BlueH2>
      <Balancer>Incident Response and Data Breach Management</Balancer>
    </BlueH2>

    <Text>
      <RedSpan>Incident Response Plan:</RedSpan>
    </Text>

    <Text>
      We maintain a comprehensive incident response plan to guide our response
      in the event of a security incident or data breach. This includes
      procedures for notifying affected users, regulatory authorities, and other
      relevant persons.
    </Text>
    <BlackHr />

    <Text>
      <RedSpan>Data Breach Notification:</RedSpan>
      <br />
      <br />
      In the event of a data breach that compromises the security of users
      personal information, we will notify affected users in accordance with
      applicable data protection laws and regulations.
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default IncidentResponse;
