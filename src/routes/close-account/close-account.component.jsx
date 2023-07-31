import useConfirmCloseAccount from "./use-confirm-close-account";

import { contactRoute } from "../../strings/strings";
import { Container } from "../../styles/container/container.styles";
import { ParentDiv } from "../../styles/div/div.styles";
import { BlackTitle } from "../../styles/h1/h1.styles";
import { Text } from "../../styles/p/p.styles";
import { StyledLink } from "../../styles/link/link.styles";
import { YellowGreenButton } from "../../styles/buttons/buttons.styles";

const CloseAccount = () => {
  const { confirmCloseAccount } = useConfirmCloseAccount();

  return (
    <Container>
      <ParentDiv>
        <BlackTitle>close your account</BlackTitle>
      </ParentDiv>

      <ParentDiv>
        <Text>
          if you wish to close your account, please send us a request using the
          "close account" button below.
        </Text>
        <Text>
          once we have received your request, you account and all of it's data
          will be deleted.
        </Text>
        <Text>
          please allow up to 14 days for all of this data to be deleted.
        </Text>
        <Text>
          you will receive an email confirming that all of your data has been
          deleted once the data deletion has occured.
        </Text>
        <Text>
          please make sure that if you have funds in your account, that you
          either spend or request a refund for the amount in your wallet before
          proceeding with the delete account request.
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>any questions?</Text>
        <Text>
          please <StyledLink to={contactRoute}>contact us</StyledLink>
        </Text>
      </ParentDiv>

      <ParentDiv>
        <Text>happy to proceed with your account deletion?</Text>
        <Text>tap the button below!</Text>
        <YellowGreenButton onClick={confirmCloseAccount}>
          close account
        </YellowGreenButton>
      </ParentDiv>
    </Container>
  );
};

export default CloseAccount;
