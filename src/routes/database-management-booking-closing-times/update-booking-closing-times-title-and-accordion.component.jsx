import Balancer from "react-wrap-balancer";

import UpdateBookingClosingTimesInstructions from "./update-booking-closing-times-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdateBookingClosingTimesTitleAndAccordion = () => (
  <ParentDiv>
    <Balancer>
      <BlackTitle>your current booking closing times:</BlackTitle>
    </Balancer>
    <UpdateBookingClosingTimesInstructions />
  </ParentDiv>
);

export default UpdateBookingClosingTimesTitleAndAccordion;
