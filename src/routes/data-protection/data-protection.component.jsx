import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { StyledUnorderedList, BlackListItem } from "../../styles/ul/ul.styles";

import { privacyPolicyRoute } from "../../strings/routes/routes-strings";
import ContactLink from "./contact-link.component";
import Balancer from "react-wrap-balancer";

const DataProtection = () => (
  <Container>
    <ParentDiv>
      <BlackTitle>data protection</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        At breakfast and after school club, we prioritise the security and
        privacy of your personal data. For detailed information on how we
        handle, store, and protect your data, please refer to the relevent
        sections in our{" "}
        <StyledLink to={privacyPolicyRoute}>privacy policy</StyledLink>.
      </Text>
    </ParentDiv>

    <ParentDiv>
      <BlueH2>
        <Balancer>Key Points of Our Data Protection Policy: </Balancer>
      </BlueH2>

      <StyledUnorderedList>
        <BlackListItem>
          We collect and use your personal data to facilitate and manage
          bookings, communicate with you, process payments, and ensure the
          safety of your children.
        </BlackListItem>
        <BlackListItem>
          We may share your data with third parties, such as payment processors
          and schools, under strict data protection agreements to ensure
          compliance with data protection standards.
        </BlackListItem>
        <BlackListItem>
          We employ robust security measures, including encryption, access
          controls, and regular audits, to protect your data.
        </BlackListItem>
        <BlackListItem>
          You have the right to access, correct, delete, object to, or restrict
          the processing of your data. You can also request data portability and
          withdraw consent at any time.
        </BlackListItem>
      </StyledUnorderedList>
    </ParentDiv>

    <ParentDiv>
      <Text>
        For more detailed information, please review our{" "}
        <StyledLink to={privacyPolicyRoute}>privacy policy</StyledLink>.
      </Text>
    </ParentDiv>

    <PolicyContactInfo />
    <ContactLink />
  </Container>
);

export default DataProtection;
