import { aboutRoute } from "../../../strings/routes/routes-strings";
import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

const PaymentsAndVirtualWallet = () => (
  <ParentDiv>
    <BlueH2>Payments And Virtual Wallet:</BlueH2>
    <Text>
      for parents, Payments can be made in app using our payment processor{" "}
      <a className="red" href="https://stripe.com/gb">
        Stripe
      </a>
      .
    </Text>
    <Text>Funds can be added to a virtual wallet for future bookings.</Text>
    <Text>
      the virtual wallet balance is reduced or increased depending on whether
      the booking is being made or cancelled.
    </Text>
    <Text>
      please see our <StyledLink to={aboutRoute}>about page</StyledLink> and
      scroll down to the section with the heading 'How Does A User Book A
      Session?' for full details of the process.
    </Text>
    <Text>
      for the administrator, Transaction fees apply for each fund transfer a
      parent makes to the virtual wallet.
    </Text>
    <Text>
      please see{" "}
      <a className="red" href="https://stripe.com/gb/pricing">
        Here
      </a>{" "}
      for stripe transaction fees.
    </Text>
    <Text>
      for the administrator, payment for the app's services is made in
      accordance with the contract that will be signed before purchasing the
      app.
    </Text>
  </ParentDiv>
);

export default PaymentsAndVirtualWallet;
