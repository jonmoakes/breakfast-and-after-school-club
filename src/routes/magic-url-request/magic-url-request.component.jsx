import { useSelector } from "react-redux";
import Balancer from "react-wrap-balancer";

import useMagicUrlRequestSwal from "./magic-url-request-hooks/use-magic-url-request-swal";
import useHandleMagicUrlEmailChange from "./magic-url-request-hooks/use-handle-magic-url-email-change";
import useConfirmRequestMagicUrl from "./magic-url-request-hooks/use-confirm-request-magic-url";

import {
  selectMagicUrlRequestIsLoading,
  selectMagicUrlRequestEmail,
} from "../../store/magic-url-request/magic-url-request.selector";

import Loader from "../../components/loader/loader.component";
import MagicUrlInfo from "./magic-url-request-info.component";

import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { Form, Label, LowercasedInput } from "../../styles/form/form.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { enterEmailAddress } from "../../strings/strings";

const MagicUrlRequest = () => {
  useMagicUrlRequestSwal();
  const { handleMagicUrlEmailChange } = useHandleMagicUrlEmailChange();
  const { confirmRequestMagicUrl } = useConfirmRequestMagicUrl();

  const magicUrlRequestEmail = useSelector(selectMagicUrlRequestEmail);
  const isLoading = useSelector(selectMagicUrlRequestIsLoading);

  return (
    <Container>
      {isLoading ? <Loader /> : null}

      <ParentDiv>
        <BlackTitle>
          <Balancer>sign in with a magic url</Balancer>
        </BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <MagicUrlInfo />

        <Form className="below-accordion">
          <Label>email:</Label>
          <LowercasedInput
            type="email"
            required
            placeholder={enterEmailAddress}
            value={magicUrlRequestEmail || ""}
            onChange={handleMagicUrlEmailChange}
          />

          {magicUrlRequestEmail ? (
            <YellowGreenButton type="button" onClick={confirmRequestMagicUrl}>
              generate magic url
            </YellowGreenButton>
          ) : null}
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default MagicUrlRequest;
