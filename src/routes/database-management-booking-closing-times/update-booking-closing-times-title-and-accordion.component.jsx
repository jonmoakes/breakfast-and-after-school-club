import Balancer from "react-wrap-balancer";

import UpdateBookingClosingTimesInstructions from "./update-booking-closing-times-instructions.component";

import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";

const UpdateBookingClosingTimesTitleAndAccordion = () => (
  <ParentDiv>
    <BlackTitle>
      <Balancer>your current booking closing times:</Balancer>
    </BlackTitle>

    <UpdateBookingClosingTimesInstructions />
  </ParentDiv>
);

export default UpdateBookingClosingTimesTitleAndAccordion;
