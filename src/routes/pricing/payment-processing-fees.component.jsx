import { termsRoute } from "../../strings/routes/routes-strings";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const PaymentProcessingFees = () => (
  <ParentDiv>
    <BlueH2>payment processing fees</BlueH2>
    <Text>
      <a className="red" href="https://stripe.com/gb/pricing">
        stripe
      </a>{" "}
      ( who is our payment processor ) has processing fees for each transaction
      that your user makes.
    </Text>
    <Text>
      take a look at their{" "}
      <a className="red" href="https://stripe.com/gb/pricing">
        latest fees
      </a>
      .
    </Text>

    <BlackHr />
    <Text>
      we hope that you agree, it is a small price to pay for industry leading
      security and payment processing features, trusted by thousands of
      companies including huge compaines like:
      <StyledUnorderedList>
        <BlueListItem>Amazon</BlueListItem>
        <BlueListItem>Google</BlueListItem>
        <BlueListItem>Microsoft</BlueListItem>
        <BlueListItem>Spotify</BlueListItem>
        <BlueListItem>Uber</BlueListItem>
        <BlueListItem>Booking.com</BlueListItem>
        <BlueListItem>Shopify</BlueListItem>
      </StyledUnorderedList>
      and many more!
    </Text>
    <BlackHr />
    <Text>
      this payment processing fee is separate to the pricing plan you pay to
      breakfast and after school club, as during the sign up process we create
      you your own stripe account, so that you are fully in control of what
      money is coming into your business!
    </Text>
    <Text>
      please note that breakfast and after school club is not responsible for
      any changes in stripe fees.
    </Text>
    <Text>
      please see our full{" "}
      <StyledLink to={termsRoute}>terms and conditions</StyledLink> for more
      details.
    </Text>
  </ParentDiv>
);

export default PaymentProcessingFees;
