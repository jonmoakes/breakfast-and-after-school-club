import Balancer from "react-wrap-balancer";
import { WhiteShadowText } from "../../../styles/p/p.styles";
import { YellowShadowSpan } from "../../../styles/span/span.styles";

const ReadExample = () => (
  <WhiteShadowText>
    <Balancer>
      please also make sure that you have read the '
      <YellowShadowSpan>important info</YellowShadowSpan>' notes at the top of
      the page.
    </Balancer>
  </WhiteShadowText>
);

export default ReadExample;
