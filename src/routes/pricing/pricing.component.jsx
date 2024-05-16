import { Container } from "../../styles/container/container.styles";

import PricingTitleAndIntro from "./pricing-title-and-intro.component";
import PaymentProcessingFees from "./payment-processing-fees.component";
import UnderTenChildren from "./under-ten-children.component";
import TenToFourtyNineChildren from "./ten-to-fourty-nine-children.component";
import FiftyToOneNineNineChildren from "./fifty-to-one-nine-nine-children.component";
import TwoHundredPlusChildren from "./two-hundred-plus-children.component";
import PlansInclude from "./plans-include.component";
import LinkToContact from "./link-to-contact.component";

const Pricing = () => (
  <Container>
    <PricingTitleAndIntro />
    <UnderTenChildren />
    <TenToFourtyNineChildren />
    <FiftyToOneNineNineChildren />
    <TwoHundredPlusChildren />
    <PlansInclude />
    <PaymentProcessingFees />
    <LinkToContact />
  </Container>
);

export default Pricing;
