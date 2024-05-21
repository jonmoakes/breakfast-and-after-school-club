import { ParentDiv } from "../../../styles/div/div.styles";
import { BlueH2 } from "../../../styles/h2/h2.styles";
import { StyledLink } from "../../../styles/link/link.styles";
import { Text } from "../../../styles/p/p.styles";

import { cookiesRoute } from "../../../strings/routes/routes-strings";

const CollectionMethods = () => (
  <ParentDiv>
    <BlueH2>methods of collection:</BlueH2>
    <Text>we collect data Directly from Users</Text>
    <Text>
      this is Information you provide during account registration, profile
      updates, and while making or canceling bookings.
    </Text>
    <Text>we also use cookies on our site.</Text>
    <Text>cookies are collected automatically when you use the app.</Text>
    <Text>
      please see our <StyledLink to={cookiesRoute}>cookies policy</StyledLink>{" "}
      for more information on the cookies we collect.
    </Text>
  </ParentDiv>
);

export default CollectionMethods;
