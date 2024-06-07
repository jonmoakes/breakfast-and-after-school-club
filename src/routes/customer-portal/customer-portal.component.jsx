import CancelSubscriptionAccordion from "./cancel-subscription-accordion.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { Text } from "../../styles/p/p.styles";

import { contactRoute } from "../../strings/routes/routes-strings";

const CustomerPortal = () => {
  const portalLink = import.meta.env.VITE_CUSTOMER_PORTAL_LINK_TEST;

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>customer portal</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          on this page, you can access a secure stripe ( our payment processor )
          hosted link to manage your subscription.
        </Text>
        <Text>you can:</Text>
        <BlackHr />
        <StyledUnorderedList>
          <BlueListItem>manage your payment card details</BlueListItem>
          <BlueListItem>change your subscription plan</BlueListItem>
          <BlueListItem>cancel your subscription</BlueListItem>
          <BlueListItem>view invoices</BlueListItem>
        </StyledUnorderedList>
        <BlackHr />
        <CancelSubscriptionAccordion />
        <BlackHr />
        <Text>
          tap the 'request portal link' button at the bottom of this page to
          access your portal.
        </Text>
        <Text>
          this will open a secure stripe hosted link where you will be required
          to enter your email address.
        </Text>
        <Text>
          you will then receive a link in your email which when opened, will
          give you access to your customer portal.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>
          if you have any questions, please{" "}
          <StyledLink to={contactRoute}>contact us</StyledLink>.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <a href={portalLink}>
          <YellowGreenButton>request portal link</YellowGreenButton>
        </a>
      </ParentDiv>
    </Container>
  );
};

export default CustomerPortal;
