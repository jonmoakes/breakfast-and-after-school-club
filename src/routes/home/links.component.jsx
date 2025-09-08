import { Link } from "react-router-dom";

import { ParentDiv } from "../../styles/div/div.styles";
import { Button } from "../../styles/buttons/buttons.styles";
import { Text } from "../../styles/p/p.styles";

import {
  // contactRoute,
  signInRoute,
  signUpRoute,
} from "../../strings/routes/routes-strings";

const Links = () => (
  <>
    <ParentDiv>
      <Link to={signInRoute}>
        <Button>sign in</Button>
      </Link>

      <Text>or</Text>

      <Link to={signUpRoute}>
        <Button>sign up</Button>
      </Link>
    </ParentDiv>

    {/* <ParentDiv>
      <Text>need help?</Text>
      <Link to={contactRoute}>
        <Button>contact us</Button>
      </Link>
    </ParentDiv> */}
  </>
);

export default Links;
