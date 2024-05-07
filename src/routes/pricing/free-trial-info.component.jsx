import { ParentDiv } from "../../styles/div/div.styles";
import { BlueH2 } from "../../styles/h2/h2.styles";
import { Text } from "../../styles/p/p.styles";
import { RedSpan } from "../../styles/span/span.styles";

const FreeTrial = () => (
  <ParentDiv>
    <BlueH2>still not sure?</BlueH2>
    <Text>
      how about a <RedSpan>free 1 month, no obligation trial?</RedSpan>
    </Text>
    <Text>
      after the one month trial, if you decide the app is not for you, you can
      walk away obligation free. Not a single penny required!
    </Text>
    <Text>
      please note, the free trial still includes payment processing fees for any
      transaction that your users make.
    </Text>
    <Text>
      please see the <RedSpan>payment processing fees</RedSpan> section further
      down this page for details.
    </Text>
  </ParentDiv>
);

export default FreeTrial;
