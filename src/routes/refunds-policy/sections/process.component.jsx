import Balancer from "react-wrap-balancer";

import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import {
  StyledUnorderedList,
  BlueListItem,
} from "../../../styles/ul/ul.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";

const Process = () => (
  <>
    <BlueH2>process:</BlueH2>

    <Text>
      <Balancer>
        To request a refund for the app subscription fee, please contact our
        support team at
        <br />
        <br />
        <LowercasedSpan>jonathan@solaris-apps.co.uk</LowercasedSpan>
        <br />
        <br />
        with the subscription details and reason for the refund request.
      </Balancer>
    </Text>
    <Text>
      Required Information:
      <br />
      Please provide:
    </Text>
    <StyledUnorderedList>
      <BlueListItem>
        <Balancer>the name of the school</Balancer>
      </BlueListItem>
      <BlueListItem>
        <Balancer>your school code</Balancer>
      </BlueListItem>
      <BlueListItem>
        <Balancer>the reason for the refund request</Balancer>
      </BlueListItem>
    </StyledUnorderedList>
    <BlackHr />
  </>
);

export default Process;
