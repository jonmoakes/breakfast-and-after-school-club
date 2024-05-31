import Balancer from "react-wrap-balancer";

import { InnerDiv, ParentDiv } from "../../../styles/div/div.styles";
import { BlackTitle } from "../../../styles/h1/h1.styles";
import { Text } from "../../../styles/p/p.styles";

const Intro = () => (
  <>
    <ParentDiv>
      <InnerDiv>
        <BlackTitle>
          <Balancer>create your new password</Balancer>
        </BlackTitle>
      </InnerDiv>
    </ParentDiv>

    <ParentDiv>
      <Text>
        <Balancer>
          enter in your new password, then retype it to confirm it.
        </Balancer>
      </Text>
      <Text>
        <Balancer>
          then tap the "update password" button when it appears.
        </Balancer>
      </Text>
    </ParentDiv>
  </>
);

export default Intro;
