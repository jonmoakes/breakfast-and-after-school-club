import PricingHelmet from "./pricing-helmet.component";
import PricingTitleAndIntro from "./pricing-title-and-intro.component";
import PaymentProcessingFees from "./payment-processing-fees.component";
import UnderTenChildren from "./under-ten-children.component";
import TenToFourtyNineChildren from "./ten-to-fourty-nine-children.component";
import FiftyToOneNineNineChildren from "./fifty-to-one-nine-nine-children.component";
import TwoHundredPlusChildren from "./two-hundred-plus-children.component";
import PlansInclude from "./plans-include.component";
import LinkToContact from "./link-to-contact.component";
import Footer from "../../components/footer/footer.component";

import { Container } from "../../styles/container/container.styles";

const Pricing = () => (
  <Container>
    <PricingHelmet />
    <PricingTitleAndIntro />
    <UnderTenChildren />
    <TenToFourtyNineChildren />
    <FiftyToOneNineNineChildren />
    <TwoHundredPlusChildren />
    <PlansInclude />
    <PaymentProcessingFees />
    <LinkToContact />
    <Footer />
  </Container>
);

export default Pricing;
