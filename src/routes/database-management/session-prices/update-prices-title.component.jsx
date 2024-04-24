import Balancer from "react-wrap-balancer";

import { ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";

const UpdatePricesTitle = () => (
  <ParentDiv>
    <Balancer>
      <BlackTitle>your current session prices:</BlackTitle>
    </Balancer>
  </ParentDiv>
);

export default UpdatePricesTitle;
