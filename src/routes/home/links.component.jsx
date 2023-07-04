import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

import { bookSessionRoute, contactRoute } from "../../strings/strings";

const Links = () => (
  <ParentDiv>
    <Link to={bookSessionRoute}>
      <CustomButton>book a session</CustomButton>
    </Link>
    <Text>or</Text>
    <Link to={contactRoute}>
      <CustomButton>contact us</CustomButton>
    </Link>
  </ParentDiv>
);

export default Links;
