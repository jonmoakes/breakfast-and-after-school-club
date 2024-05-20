import { termsRoute } from "../../strings/routes/routes-strings";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { BlackHr } from "../../styles/hr/hr.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { Text } from "../../styles/p/p.styles";
import { BlueSpan } from "../../styles/span/span.styles";
import { BlueListItem, StyledUnorderedList } from "../../styles/ul/ul.styles";

const PaymentProcessingFees = () => (
  <ParentDiv>
    <BlueH2>payment processing fees</BlueH2>
    <Text>
      <a className="red" href="https://stripe.com/gb/pricing">
        stripe
      </a>{" "}
      ( who is our payment processor ) have the following transaction fees that
      are currently at the time of writing ( may 2024 ):
    </Text>
    <Text>
      <BlueSpan>1.5% + 20p</BlueSpan> for each transaction
    </Text>
    <Text>so if one of your sessions is £5, stripe will take:</Text>
    <BlackHr />
    <Text>( 1.5/100 ) * 5 = £0.075</Text>
    <Text>£0.075 + £0.20 = £0.275</Text>
    <Text>
      so stripe takes just:
      <br />
      <BlueSpan>27.5 pence</BlueSpan> per £5 transaction fee!
    </Text>
    <BlackHr />
    <Text>
      a small price to pay for industry leading security and payment processing
      features, trusted by thousands of companies including huge compaines like:
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
