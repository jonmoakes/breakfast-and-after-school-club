import PricingHelmet from "./pricing-helmet.component";
import PricingTitleAndIntro from "./pricing-title-and-intro.component";
import PaymentProcessingFees from "./payment-processing-fees.component";
import TenToFourtyNineChildren from "./ten-to-fourty-nine-children.component";
import FiftyToOneNineNineChildren from "./fifty-to-one-nine-nine-children.component";

import PlansInclude from "./plans-include.component";
import LinkToContact from "./link-to-contact.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";
import TwoHundredToTwoFourNineChildren from "./two-hundred-to-two-four-nine-children.component copy";
import TwoHundredAndFiftyPlusChildren from "./two-hundred-and-fifty-plus-children.component";

const Pricing = () => (
  <Container>
    <PricingHelmet />
    <PricingTitleAndIntro />
    <TenToFourtyNineChildren />
    <FiftyToOneNineNineChildren />
    <TwoHundredToTwoFourNineChildren />
    <TwoHundredAndFiftyPlusChildren />
    <PlansInclude />
    <PaymentProcessingFees />
    <LinkToContact />
    <Footer />
  </Container>
);

export default Pricing;
