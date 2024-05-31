import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { Text } from "../../../styles/p/p.styles";
import { RedSpan } from "../../../styles/span/span.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";

const UserEducation = () => (
  <ParentDiv>
    <BlueH2>
      <Balancer>User Education & Training</Balancer>
    </BlueH2>

    <Text>
      <RedSpan>Security Training:</RedSpan>
    </Text>

    <Text>
      <Balancer>
        Our employees undergo regular security training and awareness programs
        to ensure they understand best practices for protecting user data and
        mitigating security risks.
      </Balancer>
    </Text>
    <BlackHr />

    <Text>
      <Balancer>
        <RedSpan>user guidance:</RedSpan>
        <br />
        <br />
        We provide guidance and resources to help users understand how they can
        protect their own data and minimise security risks when using our app.
      </Balancer>
    </Text>
    <BlackHr />
  </ParentDiv>
);

export default UserEducation;
