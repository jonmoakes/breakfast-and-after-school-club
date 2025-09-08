import useGetCurrentUserSelectors from "../../hooks/get-selectors/use-get-current-user-selectors";

import RefundsPolicyTitleAndIntro from "./sections/refunds-policy-title-and-intro.component";
import SchoolSpecificPolicy from "./sections/school-specific-policy.component";
import Eligibility from "./sections/eligibility.component";
import NonRefundable from "./sections/non-refundable.component";
import Process from "./sections/process.component";
import Timeframes from "./sections/timeframes.component";
import PartialRefunds from "./sections/partial-refunds.component";
import RefundMethods from "./sections/refund-methods.component";
import ChangesToPolicy from "./sections/changes-to-policy.component";
// import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import DataProtectionLink from "./sections/data-protection-link.component";

const RefundsPolicy = () => {
  const { currentUser, email, appOwnerEmail } = useGetCurrentUserSelectors();

  return (
    <Container>
      <RefundsPolicyTitleAndIntro />

      {!currentUser || (currentUser && email !== appOwnerEmail) ? (
        <ParentDiv>
          <SchoolSpecificPolicy />
        </ParentDiv>
      ) : null}

      {!currentUser || (currentUser && email === appOwnerEmail) ? (
        <>
          <ParentDiv>
            {!currentUser ? (
              <>
                <BlueH2>for app administrators:</BlueH2>
                <Text>
                  ( users who manage their breakfast and after school clubs
                  using the app )
                </Text>
                <BlackHr />
              </>
            ) : null}

            <Eligibility />
            <Timeframes />
            <Process />
            <NonRefundable />
            <PartialRefunds />
            <RefundMethods />
          </ParentDiv>

          <ParentDiv>
            <ChangesToPolicy />
          </ParentDiv>

          {/* <PolicyContactInfo /> */}
        </>
      ) : null}

      <DataProtectionLink />
    </Container>
  );
};

export default RefundsPolicy;
