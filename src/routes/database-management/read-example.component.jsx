import Balancer from "react-wrap-balancer";
import { WhiteShadowText } from "../../styles/p/p.styles";
import { YellowShadowSpan } from "../../styles/span/span.styles";

const ReadExample = () => (
  <Balancer>
    <WhiteShadowText>
      please also make sure that you have read the '
      <YellowShadowSpan>important info</YellowShadowSpan>' notes above.
    </WhiteShadowText>
  </Balancer>
);

export default ReadExample;
