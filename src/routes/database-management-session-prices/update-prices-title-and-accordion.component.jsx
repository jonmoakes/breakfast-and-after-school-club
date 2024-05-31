import Balancer from "react-wrap-balancer";

import UpdateSessionPricesInstructions from "./update-session-prices-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdatePricesTitleAndAccordion = () => (
  <ParentDiv>
    <BlackTitle>
      <Balancer>your current session prices:</Balancer>
    </BlackTitle>

    <UpdateSessionPricesInstructions />
  </ParentDiv>
);

export default UpdatePricesTitleAndAccordion;
