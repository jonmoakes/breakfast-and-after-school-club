import Balancer from "react-wrap-balancer";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const PricingTitleAndIntro = () => (
  <>
    <ParentDiv>
      <BlackTitle>pricing</BlackTitle>
    </ParentDiv>

    <ParentDiv>
      <Text>
        choose the Right Plan for You! We offer a range of pricing plans
        designed to accommodate schools and after school clubs of all sizes.
      </Text>
      <Text>
        Whether you're a small primary school or a bustling after school club,
        we have a plan that fits your needs and budget.
      </Text>
      <Text>
        Plus, with our transparent pricing structure and no hidden fees, you can
        rest assured knowing exactly what you're paying for!
      </Text>
      <Text>
        yearly plans also get <RedSpan>10% off</RedSpan> the monthly price!
      </Text>
      <Text>whatever you choose, we also provide a</Text>
      <Text>
        <RedSpan>no obligation one month free trial</RedSpan>!
      </Text>
      <Text>
        <Balancer>
          please note, the free trial is still subject to payment processing
          fees that occur for each transaction your user makes - please see info
          at the bottom of the page for more details.
        </Balancer>
      </Text>
    </ParentDiv>

    <ParentDiv>
      <BlueH2>pricing plans:</BlueH2>
      <Text>
        <Balancer>
          after your one month free trial period, if you'd like to continue
          using the app, our pricing plans are based on the number of children
          in your setting, as follows:
        </Balancer>
      </Text>
    </ParentDiv>
  </>
);

export default PricingTitleAndIntro;
