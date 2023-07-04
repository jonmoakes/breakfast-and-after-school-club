import { Link } from "react-router-dom";

import CustomButton from "../../components/custom-button/custom-button.component";
import { ParentDiv } from "../../styles/div/div.styles";
import { Text } from "../../styles/p/p.styles";

import { contactRoute, signInRoute, signUpRoute } from "../../strings/strings";

const Links = () => (
  <>
    <ParentDiv>
      <Link to={signInRoute}>
        <CustomButton>sign in</CustomButton>
      </Link>
      <Text>or</Text>
      <Link to={signUpRoute}>
        <CustomButton>sign up</CustomButton>
      </Link>
    </ParentDiv>
    <ParentDiv>
      <Text>need help?</Text>
      <Link to={contactRoute}>
        <CustomButton>contact us</CustomButton>
      </Link>
    </ParentDiv>
  </>
);

export default Links;
