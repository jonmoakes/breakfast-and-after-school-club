import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import useHandleMagicUrlSubmit from "./use-handle-magic-url-submit";

import { selectIsLoading } from "../../store/loader/loader.selector";

import Loader from "../../components/loader/loader.component";
import MagicUrlInfo from "./magic-url-info.component";

import { Container } from "../../styles/container/container.styles";
import { InnerDiv, ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { enterEmailAddress } from "../../strings/strings";

const MagicUrlSignIn = () => {
  const { handleMagicEmailSubmit, email, setEmail } = useHandleMagicUrlSubmit();

  const isLoading = useSelector(selectIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <InnerDiv className="clear-bg">
          <BlackTitle>
            <Balancer>sign in with a magic url</Balancer>
          </BlackTitle>
        </InnerDiv>
      </ParentDiv>

      <ParentDiv>
        <MagicUrlInfo />

        <Form className="below-accordion">
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            placeholder={enterEmailAddress}
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />

          {email ? (
            <YellowGreenButton type="button" onClick={handleMagicEmailSubmit}>
              generate magic url
            </YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default MagicUrlSignIn;
