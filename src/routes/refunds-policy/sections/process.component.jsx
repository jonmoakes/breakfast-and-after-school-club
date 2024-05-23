import useGetCurrentUserSelectors from "../../../hooks/get-selectors/use-get-current-user-selectors";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { Text } from "../../../styles/p/p.styles";
import { LowercasedSpan, RedSpan } from "../../../styles/span/span.styles";
import { BlackHr } from "../../../styles/hr/hr.styles";
import {
  StyledUnorderedList,
  BlueListItem,
} from "../../../styles/ul/ul.styles";

const Process = () => {
  const { currentUser, email, appOwnerEmail } = useGetCurrentUserSelectors();

  return (
    <ParentDiv>
      <BlueH2>process:</BlueH2> <BlackHr />
      {!currentUser ? (
        <>
          <Text>
            <RedSpan> School Specific Refunds:</RedSpan>
            <br />
            <br />
            How to Request a Refund:
            <br />
            Contact the school directly to request a refund for session bookings
            or virtual wallet top-ups.
            <br />
            The school will provide the necessary information and process for
            submitting a refund request.
          </Text>
          <Text>
            Processing Time:
            <br />
            The processing time for refunds will be managed by the individual
            school.
          </Text>
          <BlackHr />
          <Text>
            <RedSpan> App Subscription Refunds:</RedSpan>
            <br />
            <br />
            How to Request a Refund:
            <br />
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
          <BlackHr />
        </>
      ) : currentUser && email === appOwnerEmail ? (
        <>
          <Text>
            <RedSpan> How to Request a Refund::</RedSpan>
            <br />
            <br />
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
          <BlackHr />
        </>
      ) : currentUser && email !== appOwnerEmail ? (
        <>
          <Text>
            <RedSpan>How to Request a Refund::</RedSpan>
            <br />
            <br />
            Contact the school directly to request a refund for session bookings
            or virtual wallet top-ups. The school will provide the necessary
            information and process for submitting a refund request.
          </Text>
          <Text>
            Processing Time:
            <br />
            The processing time for refunds will be managed by the individual
            school.
          </Text>
          <BlackHr />
        </>
      ) : null}
    </ParentDiv>
  );
};

export default Process;
