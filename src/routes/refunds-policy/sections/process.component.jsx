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

    <Balancer>
      <Text>
        To request a refund for the app subscription fee, please contact our
        support team at
        <br />
        <br />
        <LowercasedSpan>
          admin@breakfast-and-after-school-club.co.uk
        </LowercasedSpan>
        <br />
        <br />
        with the subscription details and reason for the refund request.
      </Text>
      <Text>
        Required Information:
        <br />
        Please provide:
      </Text>
      <StyledUnorderedList>
        <BlueListItem>the name of the school</BlueListItem>
        <BlueListItem>your school code</BlueListItem>
        <BlueListItem>the reason for the refund request</BlueListItem>
      </StyledUnorderedList>
    </Balancer>
    <BlackHr />
  </>
);

export default Process;
