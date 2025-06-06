import Balancer from "react-wrap-balancer";

import UpdateSessionTimesInstructions from "./update-session-times-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdateSessionTimesTitleAndAccordion = () => (
  <ParentDiv>
    <BlackTitle>
      <Balancer>your current session times:</Balancer>
    </BlackTitle>

    <UpdateSessionTimesInstructions />
  </ParentDiv>
);

export default UpdateSessionTimesTitleAndAccordion;
