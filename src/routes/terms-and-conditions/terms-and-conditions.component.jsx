import Definitions from "./sections/definitions.component";
import GeographicRestrictions from "./sections/geographic-restrictions.component";
import Introduction from "./sections/introduction.component";
import UserAccounts from "./sections/user-accounts.component";
import UserConduct from "./sections/user-conduct.component";
import BookingsAndCancellations from "./sections/bookings-and-cancellations.component";
import PaymentsAndVirtualWallet from "./sections/payments-and-virtual-wallet.component";
import DataAccuracy from "./sections/data-accuracy.component";
import IntellectualProperty from "./sections/intellectual-property.component";
import Disclaimers from "./sections/disclaimers.component";
import Termination from "./sections/termination.component";
import GoverningLaw from "./sections/governing-law.component";
import PolicyContactInfo from "../../components/policy-contact-info/policy-contact-info.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import PrivacyPolicyLink from "./sections/privacy-policy-link.component";

const TermsAndConditions = () => (
  <Container>
    <ParentDiv>
      <BlackTitle>Terms And Conditions</BlackTitle>
    </ParentDiv>

    <Introduction />
    <Definitions />
    <GeographicRestrictions />
    <UserAccounts />
    <UserConduct />
    <BookingsAndCancellations />
    <PaymentsAndVirtualWallet />
    <DataAccuracy />
    <IntellectualProperty />
    <Disclaimers />
    <Termination />
    <GoverningLaw />
    <PolicyContactInfo />
    <PrivacyPolicyLink />
  </Container>
);

export default TermsAndConditions;
