import Balancer from "react-wrap-balancer";

import UpdateSessionPricesInstructions from "./update-session-prices-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdatePricesTitleAndAccordion = () => (
  <ParentDiv>
    <Balancer>
      <BlackTitle>your current session prices:</BlackTitle>
    </Balancer>
    <UpdateSessionPricesInstructions />
  </ParentDiv>
);

export default UpdatePricesTitleAndAccordion;
